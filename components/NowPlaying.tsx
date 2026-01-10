"use client";

import clsx from "clsx";
import { useEffect } from "react";

import { useMusicContext } from "@/lib/hooks";
import { urlize } from "@/lib/utils/urlize";

import MusicIcon from "./icons/MusicIcon";

export default function NowPlaying() {
  const { audioTitle, isPlaying } = useMusicContext();

  useEffect(() => {
    if (audioTitle && isPlaying) {
      document.getElementById(urlize(audioTitle))?.scrollIntoView({ behavior: "smooth" });
    }
    // NOTE: Run effect once on component mount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="fixed inset-x-0 top-18 z-20 mx-auto max-w-3xl pr-[max(1.25rem,env(safe-area-inset-right))] pl-[max(1.25rem,env(safe-area-inset-left))]">
      <div
        className={clsx(
          "flex max-w-lg items-center gap-x-2 rounded-full bg-white px-3.5 py-2 shadow-xs",
          isPlaying ? "text-tiffany-blue" : "text-tiffany-blue/25",
        )}
      >
        <div
          className={clsx(
            "flex size-7 items-center justify-center transition delay-100",
            isPlaying && "animate-pulse",
          )}
        >
          <MusicIcon />
        </div>
        <h2 className="-mb-0.5 text-xl/none font-bold">
          {audioTitle && isPlaying ? (
            <button
              onClick={() =>
                document.getElementById(urlize(audioTitle))?.scrollIntoView({ behavior: "smooth" })
              }
              className="focus:outline-hidden focus-visible:outline-[3px] focus-visible:outline-offset-[3px] focus-visible:outline-tiffany-blue/90 focus-visible:outline-dotted"
              type="button"
            >
              {audioTitle}
            </button>
          ) : audioTitle && !isPlaying ? (
            "Loading..."
          ) : (
            ""
          )}
        </h2>
      </div>
    </div>
  );
}
