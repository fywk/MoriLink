import { island } from "./config";
import { StarSign } from "./types";

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

export function getStarSign(month: number, day: number): StarSign {
  const boundary = [19, 18, 20, 19, 20, 21, 22, 22, 22, 22, 22, 21] as const;

  const signs: Readonly<Array<StarSign>> = [
    "Capricorn",
    "Aquarius",
    "Pisces",
    "Aries",
    "Taurus",
    "Gemini",
    "Cancer",
    "Leo",
    "Virgo",
    "Libra",
    "Scorpio",
    "Sagittarius",
  ] as const;

  let signIndex: number;
  const monthIndex = month - 1;

  if (day <= boundary[monthIndex]) {
    signIndex = monthIndex;
  } else {
    signIndex = month % 12; // mod 12 to loop around to January index
  }

  return signs[signIndex];
}

export function isWinter(month: number) {
  return winterMonths.includes(month);
}

export function urlize(input: string): string {
  return input.replace(/\s+/g, "-").toLowerCase();
}

const winterMonths =
  island.hemisphere === "Northern"
    ? ([12, 1, 2] as const)
    : ([6, 7, 8] as const);
