import { ButtonHTMLAttributes, MouseEventHandler } from "react";
import { ButtonVariant } from "../../types/enums/ButtonVariantEnum";

export default function Button({ children, onClick, className, variant = "default", size = "sm", ...props }: {onClick?: MouseEventHandler; variant?: ButtonVariant; size?:"sm"|"md"|"lg"; } & ButtonHTMLAttributes<HTMLButtonElement>) {
  const getClassVariant = () => {
    switch (variant) {
      case "filled":
        return " ebr_button-filled";
      case "default":
      default:
        return "";
    }
  };

  const getClassSize = () => {
    switch (size) {
      case "md":
        return " ebr_button-md";
      case "lg":
        return " ebr_button-lg";
      case "sm":
      default:
        return " ebr_button-sm";
    }
  };
  
  return <button { ...props } onClick={onClick} className={"ebr_button" + getClassVariant() + getClassSize() + (className ? " " + className : "")}>
    {children}
  </button>;
}