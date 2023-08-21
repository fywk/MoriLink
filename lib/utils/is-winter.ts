import { island } from "../config";
import { NORTHERN_HEMISPHERE_WINTER_MONTHS, SOUTHERN_HEMISPHERE_WINTER_MONTHS } from "../constants";

export function isWinter(month: number): boolean {
  switch (island.hemisphere) {
    case "Northern":
      return NORTHERN_HEMISPHERE_WINTER_MONTHS.includes(month);
    case "Southern":
      return SOUTHERN_HEMISPHERE_WINTER_MONTHS.includes(month);
  }
}
