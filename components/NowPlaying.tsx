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
          "flex max-w-lg items-center gap-x-2 rounded-full bg-white px-3.5 py-2 shadow-sm",
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
        <h2 className="-mb-0.5 text-xl/none font-bold">
          {audioTitle && isPlaying ? (
            <a
              href={`#${urlize(audioTitle)}`}
              className="focus:outline-none focus-visible:outline-dotted focus-visible:outline-[3px] focus-visible:outline-offset-[3px] focus-visible:outline-tiffany-blue/90"
            >
              {audioTitle}
            </a>
          ) : (
            audioTitle && "Loading..."
          )}
        </h2>
      </div>
    </div>
  );
}
