import seasonColours from "@/data/season-colours.json";

import dayjs from "./dayjs";

import type { Dayjs } from "dayjs";

import type { Hemisphere, Season } from "../types/miscellaneous";

type SeasonDateRange = { startDate: Dayjs; endDate: Dayjs };

// Helper function to adjust month indices
function createDayjs(month: number, day: number): Dayjs {
  return dayjs
    .utc()
    .month(month - 1)
    .date(day);
}

function createSeason(
  startMonth: number,
  startDay: number,
  endMonth: number,
  endDay: number,
): SeasonDateRange {
  const startDate = createDayjs(startMonth, startDay);
  let endDate = createDayjs(endMonth, endDay);

  // Check if it's a leap year when creating the
  // end date for Summer in the Southern hemisphere
  if (endDate.isLeapYear() && endMonth === 2 && endDay === 28) {
    endDate = endDate.add(1, "day");
  }

  endDate = endDate.endOf("day");

  return { startDate, endDate };
}

const seasons: Record<Hemisphere, Record<Season, SeasonDateRange>> = {
  Northern: {
    Spring: createSeason(2, 25, 5, 31),
    Summer: createSeason(6, 1, 8, 31),
    Fall: createSeason(9, 1, 11, 25),
    Winter: createSeason(11, 26, 2, 24),
  },
  Southern: {
    Spring: createSeason(8, 25, 11, 30),
    Summer: createSeason(12, 1, 2, 28),
    Fall: createSeason(3, 1, 5, 25),
    Winter: createSeason(5, 26, 8, 24),
  },
};

function checkDateInRange(
  currentDate: Dayjs,
  seasonStartDate: Dayjs,
  seasonEndDate: Dayjs,
): boolean {
  if (seasonEndDate.isBefore(seasonStartDate)) {
    if (currentDate.isBefore(seasonStartDate)) {
      currentDate = currentDate.add(1, "year");
    }
    seasonEndDate = seasonEndDate.add(1, "year");
  }

  return currentDate.isBetween(seasonStartDate, seasonEndDate, "day", "[]");
}

export function getSeason(date: Dayjs, hemisphere: Hemisphere): Season | undefined {
  const hemisphereSeasons = seasons[hemisphere];

  for (const season in hemisphereSeasons) {
    if (
      checkDateInRange(
        date.clone().utc(true),
        hemisphereSeasons[season as Season].startDate,
        hemisphereSeasons[season as Season].endDate,
      )
    ) {
      return season as Season;
    }
  }
}

export function getSeasonColour(season: Season): string {
  return seasonColours[season];
}

export function getSeasonDateRange(season: Season, hemisphere: Hemisphere): string {
  const seasonDateRange = seasons[hemisphere][season];
  const startDate = seasonDateRange.startDate.format("D MMM");
  const endDate = seasonDateRange.endDate.format("D MMM");

  return `${startDate} - ${endDate}`;
}

export function isDateInSeason(date: Dayjs, hemisphere: Hemisphere, season: Season): boolean {
  const hemisphereSeason = seasons[hemisphere][season];

  return checkDateInRange(
    date.clone().utc(true),
    hemisphereSeason.startDate,
    hemisphereSeason.endDate,
  );
}
