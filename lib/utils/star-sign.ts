import starSignColours from "@/data/star-sign-colours.json";

import { DATE_FORMAT_SHORT, STAR_SIGN_BOUNDARIES, STAR_SIGNS } from "../constants";
import dayjs from "./dayjs";

import type { Day, Month } from "../types/date";
import type { StarSign } from "../types/miscellaneous";

export function getStarSign(month: Month, day: Day): StarSign {
  const monthIndex = month - 1;

  if (day <= STAR_SIGN_BOUNDARIES[monthIndex]) {
    return STAR_SIGNS[monthIndex];
  } else {
    return STAR_SIGNS[month % 12];
  }
}

export function getStarSignColour(sign: StarSign): string {
  return starSignColours[sign];
}

export function getStarSignDateRange(starSign: StarSign): string {
  const index = STAR_SIGNS.indexOf(starSign);

  const endDate = STAR_SIGN_BOUNDARIES[index];
  // Calculate the start date by adding 1 to the end date of the previous star sign
  const startDate = STAR_SIGN_BOUNDARIES[(index + STAR_SIGNS.length - 1) % STAR_SIGNS.length] + 1;
  const startMonth = ((index + STAR_SIGNS.length - 1) % STAR_SIGNS.length) + 1;
  const endMonth = index + 1;

  // Format the dates using dayjs
  const formattedStartDate = dayjs()
    .month(startMonth - 1)
    .date(startDate)
    .format(DATE_FORMAT_SHORT);
  const formattedEndDate = dayjs()
    .month(endMonth - 1)
    .date(endDate)
    .format(DATE_FORMAT_SHORT);

  return `${formattedStartDate} - ${formattedEndDate}`;
}
