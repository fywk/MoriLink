"use client";

import clsx from "clsx";

import { useMusicContext } from "@/lib/hooks";
import { Audio } from "@/lib/types";
import { urlize } from "@/lib/utils";

type Props = {
  music: Audio;
  badge: React.ReactNode;
  children: React.ReactNode;
};

export default function HourlyMusic({ music, badge, children }: Props) {
  const { audioTitle, setAudioTitle, setAudioSrc, setAudioImage, isPlaying } =
    useMusicContext();

  const handleClick = () => {
    if (music.title === audioTitle) {
      setAudioTitle("");
      setAudioSrc("");
      setAudioImage("");
    } else {
      setAudioTitle(music.title);
      music.src && setAudioSrc(music.src);
      setAudioImage("");
    }
  };

  return (
    <button
      type="button"
      onClick={() => handleClick()}
      id={urlize(music.title)}
      className={clsx(
        "group relative m-auto flex h-full max-h-[7.25rem] w-full max-w-[7.25rem] scroll-mt-44 flex-col items-center justify-center gap-y-3 rounded-3xl bg-[#f3fede] text-dark-bronze-coin focus:outline-none",
        audioTitle === music.title
          ? "ring-5 ring-[#48c058]"
          : "focus-visible:ring-4 focus-visible:ring-tiffany-blue/90"
      )}
    >
      {isPlaying && audioTitle === music.title && badge}
      {children}
    </button>
  );
}
