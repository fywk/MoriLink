import type { NumericRange, ParseInt } from "./utility";

type zeroToFive = NumericRange<0, 5>;

type zeroToNine = NumericRange<0, 9>;

type Year2000To2060 = `20${zeroToFive}${zeroToNine}` | "2060";

export type Year = ParseInt<Year2000To2060>;

export type Month = NumericRange<1, 12>;

export type Day = NumericRange<1, 31>;
