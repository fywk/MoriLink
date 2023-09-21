import { STAR_SIGN_BOUNDARIES, STAR_SIGNS } from "../constants";

import type { Day, Month } from "../types/date";
import type { StarSign } from "../types/miscellaneous";

export function getStarSign(month: Month, day: Day): StarSign {
  const signs = STAR_SIGNS;
  const boundaries = STAR_SIGN_BOUNDARIES;

  let signIndex: number;
  const monthIndex = month - 1;

  if (day <= boundaries[monthIndex]) {
    signIndex = monthIndex;
  } else {
    signIndex = month % 12;
  }

  return signs[signIndex];
}

export function getStarSignColour(sign: StarSign): string {
  switch (sign) {
    case "Capricorn":
      return "238 130 110";
    case "Aquarius":
      return "205 135 216";
    case "Pisces":
      return "95 175 196";
    case "Aries":
      return "178 172 151";
    case "Taurus":
      return "115 191 124";
    case "Gemini":
      return "118 144 212";
    case "Cancer":
      return "241 147 135";
    case "Leo":
      return "172 193 0";
    case "Virgo":
      return "169 162 240";
    case "Libra":
      return "102 197 155";
    case "Scorpio":
      return "214 158 0";
    case "Sagittarius":
      return "83 183 202";
  }
}
