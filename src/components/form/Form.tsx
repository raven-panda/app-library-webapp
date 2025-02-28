import { FormEvent, FormHTMLAttributes, ReactNode, useState } from "react";
import { FormBuilder, FormBuilderItem } from "../../types/interfaces/FormBuilder";
import { FormMatrix, FormMatrixItem } from "../../types/interfaces/FormMatrix";
import DropdownMenu from "../DropdownMenu";
import { FieldInput, IconInput, SliderInput } from "./Input";
import Dropdown from "./Dropdown";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";
import { AssertionLabels, FormGlobalAssertion, FormGlobalAssertionLabels } from "../../types/enums/AssertionEnum";

export default function EbrForm({ className, defaultData, onSubmit, formBuilder, formMatrix, assertions, submitButton, ...props }: {defaultData?: Record<string, string|number|boolean|number[]|undefined>; onSubmit: (data: any) => void; formBuilder: FormBuilder; formMatrix?: FormMatrix; assertions?: FormGlobalAssertion[]; submitButton: ReactNode; } & FormHTMLAttributes<HTMLFormElement>) {
  const {t} = useTranslation();
  const [formData, setFormData] = useState<Record<string, string|number|boolean|number[]|undefined>>(defaultData ?? {});
  const [globalErrors, setGlobalErrors] = useState<string[]>();
  const [errors, setErrors] = useState<{fieldName: string; message: string;}[]>();
  
  const buildForm = (errors?: {fieldName: string; message: string;}[]): ReactNode => {
    if (!formMatrix)
      return formBuilder.map(f => processField(f, errors?.find(e => e.fieldName === f.name)?.message));

    return formMatrix.map(row =>
      processFormRow(row, formBuilder
        .filter(field => row.fields.includes(field.name))
        .map(f => processField(f, errors?.find(e => e.fieldName === f.name)?.message))
      )
    );
  };

  const processFormRow = (row: FormMatrixItem, children: ReactNode) => {
    return row.isDropdownMenu ? <DropdownMenu key={row.fields.join("_")} title={row.dropdownMenuTitle ?? ""}>
      {children}
    </DropdownMenu> : <div key={row.fields.join("_")} className="row">
      {children}
    </div>;
  };

  const processField = (field: FormBuilderItem, error?: string) => {
    const setFieldValue = (value: string|number|boolean|number[]) => {
      setFormData(prev => ({
        ...prev,
        [field.name]: value
      }));
    };

    if (field.type === "iconinput") {
      return <IconInput setFieldValue={setFieldValue} key={field.name} placeholder={field.placeholder ?? ""} icon={field.icon ?? <></>} name={field.name} iconButtonType={field.isIconButtonSubmit ? "submit" : "disabled"} error={error} />;
    } else if (field.type === "range") {
      if (field.rangeMin === undefined || field.rangeMax === undefined)
        throw new Error(`${field.rangeMin === undefined && field.rangeMax === undefined ? "rangeMin and rangeMax" : field.rangeMax === undefined ? "rangeMax" : "rangeMin"} attribute required for range input ${field.name}.`);
      return <SliderInput setFieldValue={setFieldValue} key={field.name} label={field.label} name={field.name} rangeMin={field.rangeMin} rangeMax={field.rangeMax} error={error} />;
    } else if (field.type === "dropdown") {
      if (!field.dropdownOptions)
        throw new Error("Please provide dropdown options for dropdown " + field.name);
      return <Dropdown key={field.name} setFieldValue={setFieldValue} name={field.name} label={field.label ?? <></>} placeholder={field.placeholder ?? ""} options={field.dropdownOptions} error={error} />;
    } else {
      return <FieldInput setFieldValue={setFieldValue} key={field.name} placeholder={field.placeholder ?? ""} label={field.label} name={field.name} type={field.type} error={error} />;
    }
  };
  
  const _onSubmit = (e: FormEvent) => {
    e.preventDefault();    
    const validationData = validateForm();

    if (validationData.valid) {
      onSubmit(formData);
      setGlobalErrors(undefined);
      setErrors(undefined);
    } else if (validationData.invalidGlobalAssertions && validationData.invalidGlobalAssertions.length > 0) {
      toast.error(<div>
        <p>{t("invalidForm")}</p>
        <p>{validationData.invalidGlobalAssertions.join(", ")}</p>
      </div>);
      setGlobalErrors(validationData.invalidGlobalAssertions);
    } else if (validationData.invalidFields && validationData.invalidFields.length > 0) {
      toast.error(<div>
        <p>{t("invalidForm")}</p>
        <p>{validationData.invalidFields.map(f => f.label ?? <>{f.name}</>)}, {validationData.invalidFields.map(f => f.message).join(", ")}</p>
      </div>);
      setErrors(validationData.invalidFields.map(({name, message}) => ({
        fieldName: name,
        message
      })));
    } else {
      toast.error(t("invalidForm"));
    }
  };

  const validateForm = (): { valid: boolean; invalidGlobalAssertions?: string[]; invalidFields?: { name: string; label?: ReactNode|string; message: string; }[]; } => {
    const invalidGlobalAssertions = assertions?.filter(assertion => !validateGlobalAssertions(assertion)) ?? [];

    if (invalidGlobalAssertions.length > 0) {
      return {
        valid: false,
        invalidGlobalAssertions: invalidGlobalAssertions.map(assertion => t(FormGlobalAssertionLabels[assertion]))
      };
    }
      
    const requiredFields = formBuilder.filter(field => field.required);
    const fieldsWithAssertions = formBuilder.filter(field => field.assertion);

    const invalidRequiredFields = requiredFields.filter(field => !validateRequiredField(field, formData[field.name]));
    const invalidFieldsWithAssertion = fieldsWithAssertions.filter(field => !validateFieldAssertion(field, formData[field.name]));

    return {
      valid: invalidRequiredFields.length === 0 && invalidFieldsWithAssertion.length === 0,
      invalidFields: [
        ...invalidRequiredFields.map(({name, label, placeholder}) => ({
          name,
          label: label ?? placeholder,
          message: t("thisFieldIsRequired")
        })),
        ...invalidFieldsWithAssertion.filter(field => invalidRequiredFields.every(f => f.name !== field.name)).map(({name, label, placeholder, assertion}) => ({
          name,
          label: label ?? placeholder,
          message: assertion ? t(AssertionLabels[assertion]) : t("thisFieldIsInvalid")
        }))
      ]
    };
  };

  const validateGlobalAssertions = (assertion: FormGlobalAssertion): boolean => {
    switch (assertion) {
      case "AT_LEAST_ONE_VALUE_SET":
        return formBuilder.some(field => validateRequiredField(field, formData[field.name]));
      default:
        return true;
    }
  };

  const validateRequiredField = (field: FormBuilderItem, value: string | number | boolean | number[] | undefined): boolean => {
    switch (field.type) {
      case "range":
        return value !== undefined && Array.isArray(value) && value.length === 2 && value[0] !== undefined && value[1] !== undefined;
      case "iconinput":
      case "dropdown":
      case "text":
        return value !== undefined && typeof value === "string" && value.length > 0;
      default:
        return value !== undefined;
    }
  };

  const validateFieldAssertion = (field: FormBuilderItem, value: string | number | boolean | number[] | undefined): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    switch (field.assertion) {
      case "EMAIL":
        return typeof value === "string" && emailRegex.test(value);
      case "NUMBER_NOT_ZERO":
        return typeof value === "number" && value > 0;
      default:
        return true;
    }
  };
  
  return <form {...props} action="#" onSubmit={_onSubmit} className={"ebr_form" + (className ? " " + className : "")} noValidate>
    {globalErrors && <p className="ebr_input-error">{globalErrors.join(", ")}</p>}
    {buildForm(errors)}
    {submitButton}
  </form>;
}