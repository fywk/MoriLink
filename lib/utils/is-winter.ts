import { NORTHERN_HEMISPHERE_WINTER_MONTHS, SOUTHERN_HEMISPHERE_WINTER_MONTHS } from "../constants";

import type { Hemisphere } from "../types/miscellaneous";

export function isWinter(hemisphere: Hemisphere, month: number): boolean {
  switch (hemisphere) {
    case "Northern":
      return NORTHERN_HEMISPHERE_WINTER_MONTHS.includes(month);
    case "Southern":
      return SOUTHERN_HEMISPHERE_WINTER_MONTHS.includes(month);
  }
}
