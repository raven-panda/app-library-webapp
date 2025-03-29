/**
 * @todo Implements assertions when needed
 */
export type AssertionType = 'EMAIL' | 'NUMBER_NOT_ZERO';

export type FormGlobalAssertion =
  | 'AT_LEAST_ONE_VALUE_SET'
  | 'AT_LEAST_ONE_VALUE_SPECIFIED_SET';

export const AssertionLabels: Record<AssertionType, string> = {
  EMAIL: 'assertions.email',
  NUMBER_NOT_ZERO: 'assertions.numberNotZero',
};

export const FormGlobalAssertionLabels: Record<FormGlobalAssertion, string> = {
  AT_LEAST_ONE_VALUE_SET: 'assertions.atLeastOneValueSet',
  AT_LEAST_ONE_VALUE_SPECIFIED_SET: 'assertions.atLeastOneValueSpecifiedSet',
};
