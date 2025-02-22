import Button from './Button';
import { useTranslation } from 'react-i18next';
import { ReactNode, useState } from 'react';
import { X } from 'react-feather';

function IconInput({ placeholder, name, icon, onIconClick = () => null, iconButtonType = "button" }: { placeholder: string; name: string; icon: ReactNode; onIconClick?: () => void; iconButtonType?: "submit" | "reset" | "button"; }) {
  const {t} = useTranslation();
  const [value, setValue] = useState<string>("");

  return <label className="ebr_input" aria-label={placeholder} htmlFor={name}>
    <Button type={iconButtonType} onClick={onIconClick} aria-label={t("form.searchButtonAriaLabel")}>
      {icon}
    </Button>
    <input placeholder={placeholder} value={value} onChange={(e) => setValue(e.currentTarget.value)} aria-label={t("form.searchFieldAriaLabel")} type="text" name={name} id={name} />
    {!!value?.length &&
    <Button type="reset" aria-label={t("form.resetButtonAriaLabel")} onClick={() => setValue("")}>
      <X></X>
    </Button>}
  </label>;
}

export default function Input({ type, placeholder, name, icon, iconButtonType }: { type?: "iconinput"; placeholder: string; name: string; icon?: ReactNode; iconButtonType?: "submit" | "reset" | "button"; }) {
  if (type === "iconinput" && !icon)
    throw new Error("Icon is needed for icon input");

  switch (type) {
    case "iconinput":
      return <IconInput placeholder={placeholder} icon={icon} name={name} iconButtonType={iconButtonType} />;
    default:
      return <></>;
  }
}