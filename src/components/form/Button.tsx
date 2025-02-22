import { ReactNode } from "react";

export default function Button({children}: {children: ReactNode}) {
  return <button className="ebr_button">
    {children}
  </button>;
}