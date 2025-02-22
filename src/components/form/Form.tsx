import { ReactNode } from "react";

export default function EbrForm({ children, className, defaultData, onSubmit }: {children: ReactNode; className?: string; defaultData?: Record<string, any>; onSubmit: (data: any) => void}) {
  const _onSubmit = (formData: FormData) => {
    const dataObject: Record<string, any> = defaultData ?? {};
    formData.forEach((value, key) => dataObject[key] = value);
    onSubmit(dataObject);
  };
  
  return <form action={_onSubmit} className={"ebr_form " + (className ?? "")} noValidate>
    {children}
  </form>;
}