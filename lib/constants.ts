export const DATE_FORMAT_FULL = "D MMMM YYYY";

export const DATE_FORMAT_MEDIUM = "D MMM YYYY";

export const DATE_FORMAT_SHORT = "D MMM";

export const STAR_SIGNS = [
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

/** The last day of each star sign in ACNH, starting with January 19 of Capricorn, February 18 of Aquarius, and so on. */
export const STAR_SIGN_BOUNDARIES = [19, 18, 20, 19, 20, 21, 22, 22, 22, 22, 22, 21] as const;

export const NORTHERN_HEMISPHERE_WINTER_MONTHS = [12, 1, 2] as const;

export const SOUTHERN_HEMISPHERE_WINTER_MONTHS = [6, 7, 8] as const;
