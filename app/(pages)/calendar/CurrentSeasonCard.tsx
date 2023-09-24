"use client";

import Image from "next/image";

import { island } from "@/lib/config";
import dayjs from "@/lib/utils/dayjs";
import { getSeason, getSeasonColour, getSeasonDateRange } from "@/lib/utils/season";

import CardPlaceholder from "./PlaceholderCard";

export default function CurrentSeasonCard() {
  const today = dayjs();

  const currentSeason = getSeason(today, island.hemisphere);
  if (!currentSeason) return <CardPlaceholder />;

  const seasonColour = getSeasonColour(currentSeason);
  const seasonDates = getSeasonDateRange(currentSeason, island.hemisphere);
  const characterIcon =
    currentSeason === "Summer" || currentSeason === "Winter"
      ? "/images/sprites/npc-icon/Isabelle.png"
      : "/images/sprites/npc-icon/Tom_Nook.png";

  return (
    <div className="@container" style={{ ["--season-colour" as any]: seasonColour }}>
      <div className="relative grid aspect-[65/24] grid-rows-[auto_1fr] gap-y-1 rounded-sm border-4 border-[rgb(var(--season-colour))] bg-[rgb(var(--season-colour)/.4)] bg-[repeating-linear-gradient(135deg,transparent,transparent_12px,rgb(var(--season-colour)/.15)_12px,rgb(var(--season-colour)/.15)_24px)] px-3.5 pb-1.5 pt-1 text-center font-bold tracking-tight @[200px]:px-4">
        <h3 className="text-[13px]/[13px] text-[rgb(var(--season-colour))] brightness-75 saturate-150">
          Current season
        </h3>
        <div className="flex w-full flex-col items-center justify-center gap-y-0.5 rounded-md bg-white/90 p-2 @[200px]:gap-y-1">
          <h4 className="leading-none text-[rgb(var(--season-colour))] brightness-[.875] saturate-150 @[200px]:text-lg/none">
            {currentSeason}
          </h4>
          <p className="text-xs/none text-dark-bronze-coin/75 @[200px]:text-sm/none">{`(${seasonDates})`}</p>
        </div>
        <Image
          src={`/images/sprites/season/${currentSeason}.png`}
          width={200}
          height={200}
          alt=""
          unoptimized
          className="absolute left-0.5 top-0.5 h-7 w-7"
          draggable={false}
        />
        <Image
          src={characterIcon}
          width={128}
          height={128}
          alt=""
          unoptimized
          className="absolute bottom-0 right-0 h-7.5 w-7.5"
          draggable={false}
        />
      </div>
    </div>
  );
}
