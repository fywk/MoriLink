type Enumerate<N extends number, Acc extends number[] = []> = Acc["length"] extends N
  ? Acc[number]
  : Enumerate<N, [...Acc, Acc["length"]]>;

export type NumericRange<F extends number, T extends number> =
  | Exclude<Enumerate<T>, Enumerate<F>>
  | T;

/**
 * Convert string literal types to `number`
 *
 * @example
 * ```
 * type T1 = ParseInt<"100"> // -> type T1 = 100
 * type T2 = ParseInt<"-13"> // -> type T2 = -13
 * type T3 = ParseInt<"abc"> // -> type T3 = never
 * ```
 */
export type ParseInt<T> = T extends `${infer N extends number}` ? N : never;
