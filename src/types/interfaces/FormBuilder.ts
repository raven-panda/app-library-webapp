import { HTMLInputTypeAttribute, ReactNode } from "react";
import { SelectOption } from "../controls/SelectOption";
import { AssertionType } from "../enums/AssertionEnum";

export interface FormBuilderItem {
  name: string;
  type: HTMLInputTypeAttribute|"iconinput"|"dropdown";
  required: boolean;
  assertion?: AssertionType;
  placeholder?: string;
  label?: ReactNode|string;
  icon?: ReactNode;
  isIconButtonSubmit?: boolean;
  rangeMin?: number;
  rangeMax?: number;
  dropdownOptions?: SelectOption[];
};

export type FormBuilder = FormBuilderItem[];
