"use client";

import clsx from "clsx";
import { useEffect, useRef, useState } from "react";
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

  const [currentHour, setCurrentHour] = useState<string>("");
  const [isRainingOrSnowing, setIsRainingOrSnowing] = useState<boolean>(false);
  const [musicSource, setMusicSource] = useState<string>("");
  const [musicTitle, setMusicTitle] = useState<string>(" ");

  const weather = useRef<WeatherCondition>();

  const { data: weatherData } = useSWRImmutable<WeatherData>("/api/weather", fetcher);

  useEffect(() => {
    if (weatherData) {
      // Check whether it's thunderstoming, drizzling, raining, or snowing locally via OpenWeather API's weather condition codes
      // Reference: https://openweathermap.org/weather-conditions
      const weatherCode = weatherData.id;
      setIsRainingOrSnowing(weatherCode >= 200 && weatherCode < 700);
      console.log(`📍 Weather Location: ${weatherData.city}, ${weatherData.country}`);
      console.log(`⛅️ Weather Condition: ${weatherData.description}`);
    }
  }, [weatherData]);

  useEffect(() => {
    const now = dayjs();

    const formattedHour = now.format("h A");

    // Set weather to "Snowy" to play the snowy variant of the hourly music when it's winter
    // The months of winter are determined by island's hemisphere set in `/lib/config.ts`
    weather.current = isRainingOrSnowing
      ? isDateInSeason(now, island.hemisphere, "Winter")
        ? "Snowy"
        : "Rainy"
      : "Sunny";
    const currentHourMusic = hourlyMusic.find(
      (track) => track.hour === now.hour() && track.weather === weather.current,
    );

    setCurrentHour(formattedHour);
    setMusicTitle(`${formattedHour} (${weather.current})`);
    currentHourMusic && setMusicSource(currentHourMusic.src);
  }, [isRainingOrSnowing]);

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
        "group relative m-auto size-full max-h-[7.25rem] max-w-[7.25rem] scroll-mt-44 rounded-3xl bg-[#f3fede] focus:outline-none",
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
          !currentHour ? "opacity-0" : "opacity-100",
        )}
      >
        {children}
        <p className="text-xl/none font-[750]">{currentHour}</p>
      </div>
    </button>
  );
}
