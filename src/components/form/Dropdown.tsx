import { useRef, useState } from "react";
import { ChevronDown, X } from "react-feather";
import { SelectOption } from "../../types/controls/SelectOption";
import { useTranslation } from "react-i18next";

export default function Dropdown({ name, placeholder, label, options, isDefaultExpanded = false }: { name: string; placeholder: string; label: string; options: SelectOption[]; isDefaultExpanded?: boolean; }) {
  const {t} = useTranslation();
  
  const [isExpanded, setExpanded] = useState(isDefaultExpanded);
  const dropdownRef = useRef<HTMLDivElement|null>(null);
  const [value, setValue] = useState<string>("");

  const optionClickHandler = (value: string) => {
    setValue(value);
    setExpanded(false);
  };

  return <div className="ebr_form-control">
    <label>{label}</label>
    <div className="ebr_dropdown-control" data-expanded={isExpanded}>
      <button type="button" className="ebr_dropdown-title-button" aria-expanded={isExpanded} onClick={() => setExpanded(prev => !prev)}>
        <span>{placeholder}</span>
        <ChevronDown style={{ transform: `rotate(${isExpanded ? "180deg" : "0deg"})` }} />
      </button>
      <div ref={dropdownRef} key={value} className="ebr_dropdown-content">
        {options?.length ? <>
          {!!value?.length && <button type="button" onClick={() => optionClickHandler("")}><X className="ebr_dropdown-remove-icon"/> {t("form.delete")}</button>}
          {options.filter(opt => !opt.hidden).sort((a) => a.id === value ? -1 : 1).map(opt => 
            <button key={`dpbtn${opt.id}`} aria-selected={value === opt.id} type="button" onClick={() => optionClickHandler(opt.id)} aria-label={opt.label}>{opt.label}</button>
          )}
        </> : <>{t("form.noValueAvailable")}</>}
      </div>
      <input key={`value${value}`} name={name} type="text" value={value} readOnly hidden />
    </div>
  </div>;
}