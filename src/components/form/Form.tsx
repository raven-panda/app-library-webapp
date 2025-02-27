import { FormEvent, FormHTMLAttributes, ReactNode } from "react";

export default function EbrForm({ children, className, defaultData, onSubmit, ...props }: {children: ReactNode; defaultData?: Record<string, any>; onSubmit: (data: any) => void} & FormHTMLAttributes<HTMLFormElement>) {
  const _onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget as HTMLFormElement);

    formData.delete("searchField");

    const dataObject: Record<string, any> = defaultData ?? {};
    formData.forEach((value, key) => dataObject[key] = processValue(value));
    onSubmit(dataObject);
  };

  const processValue = (value: any): string|number|boolean|undefined => {
    if (typeof value === "string")
      return value.length ? value : undefined;

    return value;
  };
  
  return <form {...props} action="#" onSubmit={_onSubmit} className={"ebr_form" + (className ? " " + className : "")} noValidate>
    {children}
  </form>;
}