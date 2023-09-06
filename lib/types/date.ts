import type { NumericRange } from "./utility";

type zeroToNine = NumericRange<0, 9>;

type oneToNine = NumericRange<1, 9>;

type YYYY = `19${zeroToNine}${zeroToNine}` | `20${zeroToNine}${zeroToNine}`;

type MM = `0${oneToNine}` | `1${NumericRange<0, 2>}`;

type DD = `0${oneToNine}` | `${NumericRange<1, 2>}${zeroToNine}` | `3${NumericRange<0, 1>}`;

export type DateFormat = `${YYYY}-${MM}-${DD}`;

export type Month = NumericRange<1, 12>;

export type Day = NumericRange<1, 31>;
