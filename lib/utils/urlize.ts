export function urlize(input: string): string {
  return input.replace(/\s+/g, "-").toLowerCase();
}
