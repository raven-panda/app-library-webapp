import { useTranslation } from "react-i18next";
import "./style.scss";
import Input from "../../components/form/Input";
import EbrForm from "../../components/form/Form";
import { useState } from "react";
import Button from "../../components/form/Button";
import { Book, Edit3, Paperclip, Rewind, Search, Sliders, Tag } from "react-feather";
import { TFunction } from "i18next";
import DropdownMenu from "../../components/DropdownMenu";
import Dropdown from "../../components/form/Dropdown";
import { BookGenreLabels } from "../../types/enums/book/BookGenreEnum";
import { BookThemeLabels } from "../../types/enums/book/BookThemeEnum";

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
        <EbrForm onSubmit={onSubmit}>
          <Input placeholder={t("form.searchAllInput")} name="searchAll" type="iconinput" icon={<Search size={24}/>} iconButtonType="submit" />
        </EbrForm>
      }
    </header>
  </>;
}

function AdvancedSearchForm({t, onSubmit}: {t: TFunction<"translation", undefined>; onSubmit: ((data: any) => void)}) {
  const genreOptions = Object.entries(BookGenreLabels).map(([k, v]) => ({
    id: k,
    label: t(v)
  }));

  const themeOptions = Object.entries(BookThemeLabels).map(([k, v]) => ({
    id: k,
    label: t(v)
  }));

  return <EbrForm onSubmit={onSubmit}>
    <div className="row">
      <Input placeholder={t("form.author")} name="author" type="iconinput" icon={<Edit3 size={24}/>} iconButtonType="submit" />
      <Input placeholder={t("form.title")} name="title" type="iconinput" icon={<Book size={24}/>} iconButtonType="submit" />
    </div>
    <div className="row">
      <Input placeholder={t("form.editor")} name="editor" type="iconinput" icon={<Paperclip size={24}/>} iconButtonType="submit" />
      <Input placeholder={t("form.isbn")} name="isbn" type="iconinput" icon={<Tag size={24}/>} iconButtonType="submit" />
    </div>
    <DropdownMenu title={t("form.contentSection")}>
      <Dropdown name="genre" label={t("form.genre")} placeholder={t("form.genrePlaceholder")} options={genreOptions} />
      <Dropdown name="theme" label={t("form.theme")} placeholder={t("form.themePlaceholder")} options={themeOptions} />
    </DropdownMenu>
    <DropdownMenu title={t("form.priceReviewsSection")}>
      <>Children here</>
    </DropdownMenu>
  </EbrForm>;
}