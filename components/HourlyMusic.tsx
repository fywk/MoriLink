"use client";

import clsx from "clsx";
import useSWRImmutable from "swr/immutable";

import hourlyMusic from "@/data/music/hourly.json";
import { island } from "@/lib/config";
import { useMusicContext } from "@/lib/hooks";
import dayjs from "@/lib/utils/dayjs";
import fetcher from "@/lib/utils/fetcher";
import { isDateInSeason } from "@/lib/utils/season";
import { urlize } from "@/lib/utils/urlize";

import type { WeatherData } from "@/lib/providers/openweather";
import type { WeatherCondition } from "@/lib/types/miscellaneous";

type Props = {
  playingBadge: React.ReactNode;
  children: React.ReactNode;
};

export default function HourlyMusic({ playingBadge, children }: Props) {
  const { audioTitle, setAudioTitle, setAudioSrc, setAudioImage, isPlaying } = useMusicContext();

  const { data: weatherData } = useSWRImmutable<WeatherData>("/api/weather", fetcher);

  const now = dayjs();
  const formattedHour = now.format("h A");

  // Check whether it's thunderstoming, drizzling, raining, or snowing locally via OpenWeather API's weather condition codes
  // Reference: https://openweathermap.org/weather-conditions
  const isRainingOrSnowing = weatherData != null && weatherData.id >= 200 && weatherData.id < 700;

  // Set weather to "Snowy" to play the snowy variant of the hourly music when it's winter
  // The months of winter are determined by island's hemisphere set in `/lib/config.ts`
  const weather: WeatherCondition = isRainingOrSnowing
    ? isDateInSeason(now, island.hemisphere, "Winter")
      ? "Snowy"
      : "Rainy"
    : "Sunny";

  const musicTitle = `${formattedHour} (${weather})`;

  const musicSource = hourlyMusic.find(
    (track) => track.hour === now.hour() && track.weather === weather,
  )?.src;

  const handleClick = () => {
    if (musicTitle === audioTitle) {
      setAudioTitle("");
      setAudioSrc("");
      setAudioImage("");
      console.log("🎵 Stop playing hourly music");
    } else {
      setAudioTitle(musicTitle);
      musicSource && setAudioSrc(musicSource);
      setAudioImage("");
      console.log(`🎵 Playing ${musicTitle} hourly music`);
    }
  };

  return (
    <button
      onClick={() => handleClick()}
      className={clsx(
        "group relative m-auto size-full max-h-29 max-w-29 scroll-mt-44 rounded-3xl bg-[#f3fede] focus:outline-hidden",
        audioTitle === musicTitle
          ? "ring-5 ring-[#48c058]"
          : "focus-visible:ring-4 focus-visible:ring-tiffany-blue/90",
      )}
      id={urlize(musicTitle)}
      type="button"
    >
      {isPlaying && audioTitle === musicTitle ? playingBadge : null}
      <div
        className={clsx(
          "flex flex-col items-center justify-center gap-y-3 text-dark-bronze-coin transition-opacity",
          !formattedHour ? "opacity-0" : "opacity-100",
        )}
      >
        {children}
        <p className="text-xl/none font-[750]">{formattedHour}</p>
      </div>
    </button>
  );
}
