"use client";

import clsx from "clsx";

import { useMusicContext } from "@/lib/hooks";
import { urlize } from "@/lib/utils/urlize";

import type { Audio } from "@/lib/types/miscellaneous";

type Props = {
  music: Audio;
  playingBadge: React.ReactNode;
  children: React.ReactNode;
};

export default function KKMusic({ music, playingBadge, children }: Props) {
  const { isPlaying, audioTitle, setAudioTitle, setAudioSrc, setAudioImage } = useMusicContext();

  const handleClick = () => {
    if (music.title === audioTitle) {
      setAudioTitle("");
      setAudioSrc("");
      setAudioImage("");
    } else {
      setAudioTitle(music.title);
      setAudioSrc(music.src);
      setAudioImage(`/_next/image?url=${encodeURIComponent(music.image!)}&w=640&q=75`);
    }
  };

  return (
    <button
      onClick={() => handleClick()}
      className={clsx(
        "group relative z-10 flex scroll-mt-36 items-center justify-center rounded transition-transform hover:scale-105 focus:outline-none focus-visible:scale-105",
        audioTitle === music.title
          ? "ring-5 ring-[#48c058]"
          : "ring-tiffany-blue/90 focus-visible:ring-4",
      )}
      id={urlize(music.title)}
      type="button"
    >
      {isPlaying && audioTitle === music.title ? playingBadge : null}
      {children}
    </button>
  );
}
