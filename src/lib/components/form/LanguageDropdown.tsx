import {useRef, useState} from "react";
import {ChevronDown, Globe} from "react-feather";
import {useTranslation} from "react-i18next";
import {SUPPORTED_LANGUAGES} from "@/_i18n/I18nResources.tsx";
import Iso6391 from "iso-639-1";

export default function LanguageDropdown() {
  const {t} = useTranslation();
  const value = localStorage.getItem("i18nextLng") ?? "en-US";

  const options = SUPPORTED_LANGUAGES.map(lang => ({
    id: lang,
    label: Iso6391.getNativeName(lang.split('-')[0]),
  }));
  const [isExpanded, setExpanded] = useState(false);
  const dropdownRef = useRef<HTMLDivElement|null>(null);

  const optionClickHandler = (newValue: string) => {
    setExpanded(false);
    localStorage.setItem("i18nextLng", newValue);
    window.location.reload();
  };

  return <div className="ebr_form-control">
    <div className={"ebr_dropdown-control ebr_dropdown-language value-selected"} data-expanded={isExpanded}>
      <button type="button" className="ebr_dropdown-title-button" aria-expanded={isExpanded} onClick={() => setExpanded(prev => !prev)}>
        <Globe />
        <span>{t("form.language")}</span>
        <ChevronDown style={{ transform: `rotate(${isExpanded ? "180deg" : "0deg"})` }} />
      </button>
      <div ref={dropdownRef} key={value} className="ebr_dropdown-content">
        {options?.length ?
          <div className="ebr_dropdown-values">
            {options.filter(opt => opt.id === value).map(opt => <button key={`dpbtn${opt.id}`} aria-selected={value === opt.id} type="button" onClick={() => optionClickHandler(opt.id)} aria-label={opt.label}>{opt.label}</button>)}
            {options.filter(opt => opt.id !== value).map(opt =>
              <button key={`dpbtn${opt.id}`} aria-selected={value === opt.id} type="button" onClick={() => optionClickHandler(opt.id)} aria-label={opt.label}>{opt.label}</button>
            )}
          </div>
         : <>{t("form.noValueAvailable")}</>}
      </div>
    </div>
  </div>;
}
