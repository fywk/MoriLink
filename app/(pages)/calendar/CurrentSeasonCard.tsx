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
      <div className="relative grid h-full grid-rows-[auto_1fr] gap-y-1 rounded-xs border-4 border-[rgb(var(--season-colour))] bg-[rgb(var(--season-colour)/.4)] bg-[repeating-linear-gradient(135deg,transparent,transparent_12px,rgb(var(--season-colour)/.15)_12px,rgb(var(--season-colour)/.15)_24px)] px-3.5 pt-1 pb-1.5 text-center font-[750] tracking-tight @[200px]:aspect-65/24 @[200px]:h-auto @[200px]:px-4">
        <h3 className="text-[13px]/[13px] text-[rgb(var(--season-colour))] brightness-75 saturate-150">
          Current season
        </h3>
        <div className="flex w-full flex-col items-center justify-center gap-y-0.75 rounded-md bg-white/95 p-2 @[200px]:gap-y-1">
          <h4 className="leading-none text-[rgb(var(--season-colour))] brightness-[.875] saturate-150 @[200px]:text-lg/none">
            {currentSeason}
          </h4>
          <p className="text-xs/none tracking-tighter text-[#98744e] @[200px]:text-sm/none">
            {seasonDates}
          </p>
        </div>
        <Image
          src={`/images/sprites/season/${currentSeason}.png`}
          width={200}
          height={200}
          alt=""
          unoptimized
          className="absolute top-0.5 left-0.5 size-7"
          draggable={false}
        />
        <Image
          src={characterIcon}
          width={128}
          height={128}
          alt=""
          unoptimized
          className="absolute right-0 bottom-0 size-7.5"
          draggable={false}
        />
      </div>
    </div>
  );
}
