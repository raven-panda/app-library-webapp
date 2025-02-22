import { FormEvent, ReactNode } from "react";

export default function EbrForm({ children, className, defaultData, onSubmit }: {children: ReactNode; className?: string; defaultData?: Record<string, any>; onSubmit: (data: any) => void}) {
  const _onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget as HTMLFormElement);

    const dataObject: Record<string, any> = defaultData ?? {};
    formData.forEach((value, key) => dataObject[key] = processValue(value));
    onSubmit(dataObject);
  };

  const processValue = (value: any): string|number|boolean|undefined => {
    if (typeof value === "string")
      return value.length ? value : undefined;

    return value;
  };
  
  return <form action="#" onSubmit={_onSubmit} className={"ebr_form " + (className ?? "")} noValidate>
    {children}
  </form>;
}