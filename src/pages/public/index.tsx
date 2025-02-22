import { useTranslation } from "react-i18next";
import "./style.scss";
import Input from "../../components/form/Input";
import EbrForm from "../../components/form/Form";
import { useState } from "react";
import Button from "../../components/form/Button";
import { Rewind, Search, Sliders } from "react-feather";
import { TFunction } from "i18next";

export default function WelcomePage() {
  const {t} = useTranslation();
  const [isFormAdvancedMode, setFormAdvancedMode] = useState(false);

  const onSubmit = (value: any) => {
    console.log({value});
  };

  return <>
    <header className="ebr_welcome-header" data-advanced={isFormAdvancedMode}>
      <h1><span className="font-accent-blue">E.</span>brary, {t("welcomePage.title")}</h1>
      <h2>{t("welcomePage.subTitle")}</h2>

      <Button id="form-advanced-mode-toggle" onClick={() => setFormAdvancedMode(prev => !prev)}><div className="ebr_icon">{isFormAdvancedMode ? <Rewind /> : <Sliders />}</div> {t(`form.searchModeToggle.${isFormAdvancedMode.toString()}`)}</Button>
      {isFormAdvancedMode ?
        <AdvancedSearchForm t={t} /> :
        <EbrForm onSubmit={onSubmit}>
          <Input placeholder={t("form.searchAllInput")} name="searchAllInput" type="iconinput" icon={<Search size={24}/>} iconButtonType="submit" />
        </EbrForm>
      }
    </header>
  </>;
}

function AdvancedSearchForm({t}: {t: TFunction<"translation", undefined>}) {
  return <></>;
}