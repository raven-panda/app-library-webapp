import { FormGlobalAssertion } from "../enums/AssertionEnum";
import { FormBuilder } from "../interfaces/FormBuilder";
import { FormMatrix } from "../interfaces/FormMatrix";

export type FormBuilderGetter = (translate: (pointer: string) => string) => { formBuilder: FormBuilder; formMatrix?: FormMatrix; globalAssertions?: FormGlobalAssertion[] };
