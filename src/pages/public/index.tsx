import { useTranslation } from "react-i18next";
import "./style.scss";
import SearchBar from "../../components/form/SearchBar";
import EbrForm from "../../components/form/Form";

export default function WelcomePage() {
  const {t} = useTranslation();

  const onSubmit = (value: any) => {
    console.log({value});
  };

  return <>
    <div className="ebr_welcome-header">
      <h1><span className="font-accent-blue">E.</span>brary, {t("welcomePage.title")}</h1>
      <h2>{t("welcomePage.subTitle")}</h2>

      <EbrForm onSubmit={onSubmit}>
        <SearchBar placeholder={t("form.searchAllInput")} name="searchAllInput"/>
      </EbrForm>
    </div>
  </>;
}