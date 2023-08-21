import { STAR_SIGNS, STAR_SIGN_BOUNDARIES } from "../constants";

import type { Day, Month, StarSign } from "../types/miscellaneous";

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
      return "235 130 111";
    case "Aquarius":
      return "205 133 209";
    case "Pisces":
      return "93 174 202";
    case "Aries":
      return "177 173 144";
    case "Taurus":
      return "111 190 101";
    case "Gemini":
      return "123 149 223";
    case "Cancer":
      return "252 145 135";
    case "Leo":
      return "185 205 57";
    case "Virgo":
      return "168 158 229";
    case "Libra":
      return "123 197 158";
    case "Scorpio":
      return "222 165 0";
    case "Sagittarius":
      return "89 190 208";
  }
}
