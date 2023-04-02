"use client";

import clsx from "clsx";

import { useMusicContext } from "@/lib/hooks";
import { urlize } from "@/lib/utils";

import { MusicIcon } from "./Icons";

export default function NowPlaying() {
  const { audioTitle, isPlaying } = useMusicContext();

  return (
    <div className="fixed inset-x-0 top-[4.5rem] z-20 mx-auto max-w-[52rem] px-5">
      <div
        className={clsx(
          "flex max-w-lg items-center gap-x-1.5 rounded-full bg-white px-3.5 py-2 shadow-sm",
          isPlaying ? "text-tiffany-blue" : "text-tiffany-blue/25"
        )}
      >
        <div
          className={clsx(
            "flex h-7 w-7 items-center justify-center transition delay-100",
            isPlaying && "animate-pulse"
          )}
        >
          <MusicIcon />
        </div>
        <a href={`#${urlize(audioTitle)}`}>
          <h2
            className={clsx(
              "-mb-0.5 text-xl/none font-bold opacity-0 transition-opacity duration-200",
              audioTitle && "opacity-100"
            )}
          >
            {isPlaying ? audioTitle : audioTitle && "Loading..."}
          </h2>
        </a>
      </div>
    </div>
  );
}
