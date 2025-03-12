import Button from './Button';
import {useTranslation} from 'react-i18next';
import {HTMLInputTypeAttribute, ReactNode, useState} from 'react';
import {X} from 'react-feather';
import {Slider} from "@mui/material";

export function FieldInput({ setFieldValue, defaultValue, placeholder, label = "", name, type, error, icon, iconButtonType = "disabled", onIconClick = () => null }: { setFieldValue: (value: string| number | undefined) => void; defaultValue?: string | number; placeholder: string; label?: ReactNode; name: string; error?: string; type?: HTMLInputTypeAttribute; icon?: ReactNode; iconButtonType?: "submit" | "reset" | "button" | "disabled"; onIconClick?: () => void; }) {
  const {t} = useTranslation();
  const [value, setValue] = useState<string|number>(defaultValue ?? "");

  const changeFieldValue = (value: string) => {
    const parsedValue = type === "number"  ? value ? parseInt(value) : "" : value;

    setValue(parsedValue);
    setFieldValue(parsedValue);
  };

  const clearValue = () => {
    setValue("");
    setFieldValue(undefined);
  };

  return <div className="ebr_form-control ebr_input">
    <label htmlFor={name} aria-label={placeholder}>{label}</label>
    <div className="ebr_input-container">
      {icon && <Button className="ebr_input-icon" type={iconButtonType === "disabled" ? "button" : iconButtonType} onClick={onIconClick} aria-label={t("form.searchButtonAriaLabel")} disabled={iconButtonType === "disabled"}>
        {icon}
      </Button>}
      <input placeholder={placeholder} value={value} onChange={(e) => changeFieldValue(e.currentTarget.value)} aria-label={t("form.inputAriaLabel")} type={type ?? "text"} name={name} id={name} />
      {!!value.toString().length &&
        <Button className="ebr_input-reset" type="reset" aria-label={t("form.resetButtonAriaLabel")} onClick={() => clearValue()}>
            <X size={"0.875rem"} />
        </Button>}
    </div>
    {error && <p className="ebr_input-error">{error}</p>}
  </div>;
}

export function SliderInput({ setFieldValue, defaultValue, label, name, rangeMin, rangeMax, step, error, unit = "" }: { setFieldValue: (value: number[]) => void; defaultValue?: number[]; label?: ReactNode; name: string; rangeMin: number; rangeMax: number; step?: number; error?: string; unit?: string; }) {
  const [values, setValues] = useState<number[]>(defaultValue ?? [rangeMin, rangeMax]);

  const getStep = () => {
      if (step) return step;

      if (rangeMax > 999999)
        return 1000;
      else
        return 1;
  };

  const changeValue = (newValues: number|number[], activeThumb: number) => {
    if (!Array.isArray(newValues) || newValues.length < 2)
      return;

    if (activeThumb === 0) {
      setValues(prev => [Math.min(newValues[0], prev[1] - getStep()), prev[1]]);
    } else {
      setValues(prev => [prev[0], Math.max(newValues[1], prev[0] + getStep())]);
    }

    setFieldValue(newValues);
  };

  const formatRangeLabel = (value: number): string => {
    if (value > 999999)
      return `${Math.round(value / 1000000)}M${unit}`;
    else if (value > 999)
      return `${Math.round(value / 1000)}k${unit}`;
    else
      return `${value} ${unit}`;
  };

  return <div className="ebr_form-control">
    {label && <label htmlFor={name}>{label}</label>}
    <div className="ebr_slider-container">
      <span className="ebr_slider-minval">{formatRangeLabel(values[0])}</span>
      <Slider className="ebr_slider-control" size="small" step={getStep()} valueLabelDisplay="auto" onChange={(_e, newValues, activeThumb) => changeValue(newValues, activeThumb)} min={rangeMin} max={rangeMax}  value={values} />
      <span className="ebr_slider-maxval">{formatRangeLabel(values[1])}</span>
    </div>
    <input key={values[0]} name={"min" + name.charAt(0).toUpperCase() + name.slice(1, name.length)} type='number' value={values[0]} hidden readOnly />
    <input key={values[1]}  name={"max" + name.charAt(0).toUpperCase() + name.slice(1, name.length)} type='number' value={values[1]} hidden readOnly />
    {error && <p className="ebr_input-error">{error}</p>}
  </div>;
}
