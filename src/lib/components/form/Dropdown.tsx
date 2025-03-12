import {ReactNode, useEffect, useRef, useState} from "react";
import {ChevronDown, Search, X} from "react-feather";
import {SelectOption} from "@/lib/types/controls/SelectOption.ts";
import {useTranslation} from "react-i18next";

export default function Dropdown({ setFieldValue, defaultValue, name, placeholder, label, options, error, isDefaultExpanded = false }: { setFieldValue: (newValue: string) => void; defaultValue?: string; name: string; placeholder: string; label: ReactNode|string; options: SelectOption[]; error?: string; isDefaultExpanded?: boolean; }) {
  const {t} = useTranslation();

  const [isExpanded, setExpanded] = useState(isDefaultExpanded);
  const dropdownRef = useRef<HTMLDivElement|null>(null);
  const [value, setValue] = useState<string>(defaultValue && options.some(o => o.id === defaultValue) ? defaultValue : "");
  const [filteredOptions, setFilteredOptions] = useState(options);
  const [searchInput, setSearchInput] = useState("");

  const optionClickHandler = (newValue: string) => {
    setValue(newValue);
    setExpanded(false);
    setSearchInput("");
    setFieldValue(newValue);
  };

  const getSelectPlaceholder = () => options.find(opt => opt.id === value)?.label ?? placeholder;

  useEffect(() => {
    setFilteredOptions(options.filter(opt => searchInput.length === 0 || opt.label.toLowerCase().includes(searchInput.trim().toLowerCase())));
  }, [searchInput, options]);

  return <div className="ebr_form-control">
    <label>{label}</label>
    <div className={"ebr_dropdown-control " + (value.length ? "value-selected" : "")} data-expanded={isExpanded}>
      <button type="button" className="ebr_dropdown-title-button" aria-expanded={isExpanded} onClick={() => setExpanded(prev => !prev)}>
        <span>{getSelectPlaceholder()}</span>
        <ChevronDown style={{ transform: `rotate(${isExpanded ? "180deg" : "0deg"})` }} />
      </button>
      <div ref={dropdownRef} key={value} className="ebr_dropdown-content">
        {options?.length ? <>
          {!!value?.length && <button type="button" onClick={() => optionClickHandler("")}><X className="ebr_dropdown-remove-icon"/> {t("form.delete")}</button>}
          <label className="ebr_dropdown-search-field" htmlFor="searchField">
            <input name="searchField" placeholder={t("form.searchValue")} type="text" onChange={(e) => setSearchInput(e.currentTarget.value)} onKeyDown={(e) => {
              if (e.key === "Enter")
                e.preventDefault();
            }} />
            <Search size={14}/>
          </label>
          <div className="ebr_dropdown-values">
            {options.filter(opt => opt.id === value).map(opt => <button key={`dpbtn${opt.id}`} aria-selected={value === opt.id} type="button" onClick={() => optionClickHandler(opt.id)} aria-label={opt.label}>{opt.label}</button>)}
            {filteredOptions.filter(opt => !opt.hidden && opt.id !== value).map(opt =>
              <button key={`dpbtn${opt.id}`} aria-selected={value === opt.id} type="button" onClick={() => optionClickHandler(opt.id)} aria-label={opt.label}>{opt.label}</button>
            )}
          </div>
        </> : <>{t("form.noValueAvailable")}</>}
      </div>
      <input key={`value${value}`} name={name} type="text" value={value} readOnly hidden />
    </div>
    {error && <p className="ebr_input-error">{error}</p>}
  </div>;
}
