import { ButtonHTMLAttributes, MouseEventHandler } from "react";

export default function Button({ children, onClick, className, ...props }: {onClick?: MouseEventHandler;} & ButtonHTMLAttributes<HTMLButtonElement>) {
  return <button { ...props } onClick={onClick} className={"ebr_button" + (className ? " " + className : "")}>
    {children}
  </button>;
}