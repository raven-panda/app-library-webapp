import { HTMLInputTypeAttribute, ReactNode } from 'react';
import { SelectOption } from '../controls/SelectOption';
import { AssertionType } from '../enums/AssertionEnum';

export interface FormBuilderItem {
  name: string;
  type: HTMLInputTypeAttribute | 'dropdown' | 'multi-dropdown';
  required: boolean;
  oneOfRequired?: boolean;
  submitOnChange?: boolean;
  submitOnClear?: boolean;
  assertion?: AssertionType;
  placeholder?: string;
  label?: ReactNode | string;
  icon?: ReactNode;
  iconButtonType?: 'submit' | 'reset' | 'button' | 'disabled';
  isIconButtonSubmit?: boolean;
  rangeMin?: number;
  rangeMax?: number;
  step?: number;
  unit?: string;
  dropdownOptions?: SelectOption[];
}

export type FormBuilder = FormBuilderItem[];
