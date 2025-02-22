import { useTranslation } from "react-i18next";
import "./style.scss";
import SearchBar from "../../components/form/SearchBar";
import EbrForm from "../../components/form/Form";
import { useState } from "react";
import Button from "../../components/form/Button";
import { Rewind, Sliders } from "react-feather";

export default function WelcomePage() {
  const {t} = useTranslation();
  const [isFormAdvancedMode, setFormAdvancedMode] = useState(false);

  const onSubmit = (value: any) => {
    console.log({value});
  };

  return <>
    <div className="ebr_welcome-header" data-advanced={isFormAdvancedMode}>
      <h1><span className="font-accent-blue">E.</span>brary, {t("welcomePage.title")}</h1>
      <h2>{t("welcomePage.subTitle")}</h2>

      <Button id="form-advanced-mode-toggle" onClick={() => setFormAdvancedMode(prev => !prev)}><div className="ebr_icon">{isFormAdvancedMode ? <Rewind /> : <Sliders />}</div> {t(`form.searchModeToggle.${isFormAdvancedMode.toString()}`)}</Button>
      {isFormAdvancedMode ?
        <>a</> :
        <EbrForm onSubmit={onSubmit}>
          <SearchBar placeholder={t("form.searchAllInput")} name="searchAllInput"/>
        </EbrForm>
      }
    </div>
  </>;
}