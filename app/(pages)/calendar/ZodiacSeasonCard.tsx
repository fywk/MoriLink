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
    <div style={{ ["--star-sign-colour" as any]: zodiacColour }}>
      <div className="flex flex-col items-center gap-y-1 rounded-sm border-4 border-[rgb(var(--star-sign-colour)/0.5)] bg-[rgb(var(--star-sign-colour)/0.25)] px-3.5 pb-2.5 pt-1 font-bold tracking-tight">
        <h3 className="text-[13px]/[13px] text-[rgb(var(--star-sign-colour))] contrast-50 saturate-150">
          Zodiac season
        </h3>
        <div className="relative flex w-full flex-col items-center justify-center gap-y-1 rounded-md bg-white/95 p-2">
          <Image
            src={`/images/sprites/star-fragment/${zodiacFragmentName}.png`}
            width={128}
            height={128}
            alt={`${currentZodiac} star sign icon`}
            unoptimized
            className="absolute -left-3.5 -top-3 h-7 w-7"
            draggable={false}
          />
          <h4 className="leading-none text-dark-bronze-coin">{currentZodiac}</h4>
          <p className="text-xs/none text-beaver">{`(${zodiacDates})`}</p>
          <Image
            src={celesteIcon}
            alt="Celeste character icon"
            unoptimized
            className="absolute -bottom-3 -right-3.5 h-7 w-7 rotate-12"
            draggable={false}
          />
        </div>
      </div>
    </div>
  );
}
