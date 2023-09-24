"use client";

import Image from "next/image";

import dayjs from "@/lib/utils/dayjs";
import { getStarSign, getStarSignColour, getStarSignDateRange } from "@/lib/utils/star-sign";
import celesteIcon from "@/public/images/sprites/npc-icon/Celeste.png";

import type { Day, Month } from "@/lib/types/date";

export default function ZodiacSeasonCard() {
  const today = dayjs();

  const currentZodiac = getStarSign((today.month() + 1) as Month, today.date() as Day);
  const zodiacColour = getStarSignColour(currentZodiac);
  const zodiacDates = getStarSignDateRange(currentZodiac);
  const zodiacFragmentName = currentZodiac === "Scorpio" ? "Scorpius" : currentZodiac;

  return (
    <div className="@container" style={{ ["--star-sign-colour" as any]: zodiacColour }}>
      <div className="relative grid aspect-[65/24] grid-rows-[auto_1fr] gap-y-1 rounded-sm border-4 border-[rgb(var(--star-sign-colour)/.75)] bg-[rgb(var(--star-sign-colour)/.3)] bg-[repeating-linear-gradient(135deg,transparent,transparent_12px,rgb(var(--star-sign-colour)/.1)_12px,rgb(var(--star-sign-colour)/.1)_24px)] px-3.5 pb-1.5 pt-1 text-center font-bold tracking-tight @[200px]:px-4">
        <h3 className="text-[13px]/[13px] text-[rgb(var(--star-sign-colour))] brightness-75 saturate-150">
          Zodiac season
        </h3>
        <div className="flex w-full flex-col items-center justify-center gap-y-0.5 rounded-md bg-white/90 p-2 @[200px]:gap-y-1">
          <h4 className="leading-none text-[rgb(var(--star-sign-colour))] brightness-[.875] saturate-150 @[200px]:text-lg/none">
            {currentZodiac}
          </h4>
          <p className="text-xs/none text-beaver @[200px]:text-sm/none">{`(${zodiacDates})`}</p>
        </div>
        <Image
          src={`/images/sprites/star-fragment/${zodiacFragmentName}.png`}
          width={128}
          height={128}
          alt={`${currentZodiac} star sign icon`}
          unoptimized
          className="absolute left-0 top-0 h-8 w-8"
          draggable={false}
        />
        <Image
          src={celesteIcon}
          alt="Celeste character icon"
          unoptimized
          className="absolute bottom-0 right-0 h-7.5 w-7.5"
          draggable={false}
        />
      </div>
    </div>
  );
}
