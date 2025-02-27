export interface FormMatrixItem {
  fields: string[];
  isDropdownMenu?: boolean;
  dropdownMenuTitle?: string;
}

export type FormMatrix = FormMatrixItem[];