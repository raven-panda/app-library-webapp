import Button from './Button';
import { useTranslation } from 'react-i18next';
import { ChangeEvent, HTMLInputTypeAttribute, ReactNode, useState } from 'react';
import { X } from 'react-feather';
import { Slider } from "@mui/material";

export function IconInput({ setFieldValue, placeholder, name, icon, error, onIconClick = () => null, iconButtonType = "button" }: { setFieldValue: (value: string) => void; placeholder: string; name: string; icon: ReactNode; error?: string; onIconClick?: () => void; iconButtonType?: "submit" | "reset" | "button" | "disabled"; }) {
  const {t} = useTranslation();
  const [value, setValue] = useState<string>("");

  const changeFieldValue = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
    setFieldValue(e.currentTarget.value);
  };

  return <>
    <label className="ebr_input-with-icon" aria-label={placeholder} htmlFor={name}>
      <Button type={iconButtonType === "disabled" ? "button" : iconButtonType} onClick={onIconClick} aria-label={t("form.searchButtonAriaLabel")} disabled={iconButtonType === "disabled"}>
        {icon}
      </Button>
      <input placeholder={placeholder} value={value} onChange={changeFieldValue} aria-label={t("form.searchFieldAriaLabel")} type="text" name={name} id={name} />
      {!!value?.length &&
      <Button type="reset" aria-label={t("form.resetButtonAriaLabel")} onClick={() => setValue("")}>
        <X></X>
      </Button>}
    </label>
    {error && <p className="ebr_input-error">{error}</p>}
  </>;
}

export function FieldInput({ setFieldValue, placeholder, label = "", name, type, error }: { setFieldValue: (value: string | number) => void; placeholder: string; label?: ReactNode; name: string; error?: string; type?: HTMLInputTypeAttribute; }) {
  const {t} = useTranslation();
  const [value, setValue] = useState<string|number>(type === "number" ? 0 : "");

  const changeFieldValue = (value: string) => {
    const parsedValue = type === "number"  ? value ? parseInt(value) : 0 : value;

    setValue(parsedValue);
    setFieldValue(parsedValue);
  };

  return <div className="ebr_form-control ebr_input">
    <label htmlFor={name} aria-label={placeholder}>{label}</label>
    <input placeholder={placeholder} value={value} onChange={(e) => changeFieldValue(e.currentTarget.value)} aria-label={t("form.inputAriaLabel")} type={type ?? "text"} name={name} id={name} />
    {error && <p className="ebr_input-error">{error}</p>}
  </div>;
}

export function SliderInput({ setFieldValue, label, name, rangeMin, rangeMax, error }: { setFieldValue: (value: number[]) => void; label?: ReactNode; name: string; rangeMin: number; rangeMax: number; error?: string; }) {
  const [values, setValues] = useState<number[]>([rangeMin, rangeMax]);

  const changeValue = (value: number|number[]) => {
    if (!Array.isArray(value) || value.length < 2)
      return;

    setValues(prev => value ?? prev);
    setFieldValue(value);
  };

  return <div className="ebr_form-control">
    {label && <label htmlFor={name}>{label}</label>}
    <Slider valueLabelDisplay="auto" onChange={(_e, newValues) => changeValue(newValues)} value={values} />
    <input key={values[0]} name={"min" + name.charAt(0).toUpperCase() + name.slice(1, name.length)} type='number' value={values[0]} hidden readOnly />
    <input key={values[1]}  name={"max" + name.charAt(0).toUpperCase() + name.slice(1, name.length)} type='number' value={values[1]} hidden readOnly />
    {error && <p className="ebr_input-error">{error}</p>}
  </div>;
}
