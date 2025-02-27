/**
 * @todo Implements assertions when needed
 */
export type AssertionType =
  | "EMAIL";

export type FormGlobalAssertion =
  | "AT_LEAST_ONE_VALUE_SET";

export const AssertionLabels: Record<AssertionType, string> = {
  EMAIL: "assertions.email"
};

export const FormGlobalAssertionLabels: Record<FormGlobalAssertion, string> = {
  AT_LEAST_ONE_VALUE_SET: "assertions.atLeastOneValueSet"
};