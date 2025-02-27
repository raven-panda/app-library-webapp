import { TFunction } from "i18next";
import { useState } from "react";
import { Rewind, Search, Sliders } from "react-feather";
import { useTranslation } from "react-i18next";
import Button from "../../components/form/Button";
import EbrForm from "../../components/form/Form";
import { getSearchFormBuilderAndMatrix } from "./form/SearchFormBuilder";
import "./style.scss";

export default function WelcomePage() {
  const {t} = useTranslation();
  const [isFormAdvancedMode, setFormAdvancedMode] = useState(true);

  const onSubmit = (value: any) => {
    console.log({value});
  };

  return <>
    <header className="ebr_welcome-header" data-advanced={isFormAdvancedMode}>
      <h1><span className="font-accent-blue">E.</span>brary, {t("welcomePage.title")}</h1>
      <h2>{t("welcomePage.subTitle")}</h2>

      <Button id="form-advanced-mode-toggle" onClick={() => setFormAdvancedMode(prev => !prev)}><div className="ebr_icon">{isFormAdvancedMode ? <Rewind /> : <Sliders />}</div> {t(`form.searchModeToggle.${isFormAdvancedMode.toString()}`)}</Button>
      {isFormAdvancedMode ?
        <AdvancedSearchForm t={t} onSubmit={onSubmit} /> :
        <EbrForm
          onSubmit={onSubmit}
          formBuilder={[
            {
              name: "searchAll",
              type: "iconinput",
              placeholder: t("form.searchAllInput"),
              icon: <Search size={24}/>,
              isIconButtonSubmit: true,
              required: true
            }
          ]}
          submitButton={<></>}
        />
      }
    </header>
  </>;
}

function AdvancedSearchForm({t, onSubmit}: {t: TFunction<"translation", undefined>; onSubmit: ((data: any) => void)}) {
  const {formBuilder, formMatrix, globalAssertions} = getSearchFormBuilderAndMatrix(t);
  return <EbrForm
    onSubmit={onSubmit}
    formBuilder={formBuilder}
    formMatrix={formMatrix}
    assertions={globalAssertions}
    submitButton={<Button variant="filled" size="lg"><Search /> {t("form.search")}</Button>}
  />;
}

