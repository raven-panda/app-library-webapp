import { Search } from 'react-feather';
import Button from './Button';
import { useTranslation } from 'react-i18next';

export default function SearchBar({ placeholder, name }: { placeholder: string; name: string; }) {
  const {t} = useTranslation();
  return <label className="ebr_input" aria-label={placeholder} htmlFor={name}>
    <Button aria-label={t("form.searchButtonAriaLabel")}>
      <Search size={24}/>
    </Button>
    <input placeholder={placeholder} aria-label={t("form.searchFieldAriaLabel")} type="text" name={name} id={name} />
  </label>;
}
