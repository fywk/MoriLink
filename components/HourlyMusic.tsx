"use client";

import clsx from "clsx";
import { useEffect, useRef, useState } from "react";
import useSWRImmutable from "swr/immutable";

import hourlyMusics from "@/data/music/hourly.json";
import { useMusicContext } from "@/lib/hooks";
import fetcher from "@/lib/utils/fetcher";
import { isWinter, urlize } from "@/lib/utils/miscellaneous";

import type { Month, WeatherCondition } from "@/lib/types/miscellaneous";
import type { WeatherData } from "@/lib/types/openweather";

type Props = {
  playingBadge: React.ReactNode;
  children: React.ReactNode;
};

export default function HourlyMusic({ playingBadge, children }: Props) {
  const { audioTitle, setAudioTitle, setAudioSrc, setAudioImage, isPlaying } =
    useMusicContext();
  const [currentHour, setCurrentHour] = useState<string>("");
  const [musicTitle, setMusicTitle] = useState<string>(" ");
  const [musicSource, setMusicSource] = useState<string>("");

  const weather = useRef<WeatherCondition>();
  const isRainingOrSnowing = useRef<boolean>();

  const { data } = useSWRImmutable<WeatherData>("/api/weather", fetcher);

  useEffect(() => {
    if (data) {
      // Check whether it's thunderstoming, drizzling, raining, or snowing locally via OpenWeather API's weather condition codes
      // Reference: https://openweathermap.org/weather-conditions
      const weatherCode = data.weather[0].id;
      isRainingOrSnowing.current =
        weatherCode !== undefined && weatherCode >= 200 && weatherCode < 700;
      console.log(`⛅️ Weather Location: ${data.name}, ${data.sys.country}`);
    }
  }, [data]);

  useEffect(() => {
    const now = new Date();

    // Convert time to 12-hour format
    const formattedHour = now.toLocaleString("en-US", {
      hour: "numeric",
      hour12: true,
    });

    // Set weather to "Snowy" to play the snowy variant of the hourly music when it's winter
    // The months of winter are determined by island's hemisphere set in `/lib/config.ts`
    weather.current = isRainingOrSnowing.current
      ? isWinter((now.getMonth() + 1) as Month) ? "Snowy" : "Rainy"
      : "Sunny";
    const currentHourMusic = hourlyMusics.find(
      (music) =>
        music.hour === now.getHours() && music.weather === weather.current
    );

    setCurrentHour(formattedHour);
    setMusicTitle(`${formattedHour} (${weather.current})`);
    currentHourMusic && setMusicSource(currentHourMusic.src);
  }, [isRainingOrSnowing]);

  useEffect(() => {
    if (currentHour && weather.current && data) {
      console.log(
        `🎵 ${weather.current} variant of the ${currentHour} hourly music will be played.`
      );
    }
  }, [currentHour, data]);

  const handleClick = () => {
    if (musicTitle === audioTitle) {
      setAudioTitle("");
      setAudioSrc("");
      setAudioImage("");
    } else {
      setAudioTitle(musicTitle);
      musicSource && setAudioSrc(musicSource);
      setAudioImage("");
    }
  };

  return (
    <button
      type="button"
      onClick={() => handleClick()}
      id={urlize(musicTitle)}
      className={clsx(
        "group relative m-auto h-full max-h-[7.25rem] w-full max-w-[7.25rem] scroll-mt-44 rounded-3xl bg-[#f3fede] focus:outline-none",
        audioTitle === musicTitle
          ? "ring-5 ring-[#48c058]"
          : "focus-visible:ring-4 focus-visible:ring-tiffany-blue/90"
      )}
    >
      {isPlaying && audioTitle === musicTitle && playingBadge}
      <div
        className={clsx(
          "flex flex-col items-center justify-center gap-y-3 text-dark-bronze-coin transition-opacity",
          !currentHour ? "opacity-0" : "opacity-100"
        )}
      >
        {children}
        <p className="text-xl/none font-[750]">{currentHour}</p>
      </div>
    </button>
  );
}
