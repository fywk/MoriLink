import { createContext, useContext } from "react";

import type { RefObject } from "react";

type MusicContextType = {
  audioRef: RefObject<HTMLAudioElement | null>;
  audioTitle: string;
  setAudioTitle(value: string): void;
  audioSrc: string;
  setAudioSrc(value: string): void;
  audioImage: string;
  setAudioImage(value: string): void;
  isPlaying: boolean;
  setIsPlaying(value: boolean): void;
};

export const MusicContext = createContext<MusicContextType>({
  audioRef: { current: null },
  audioTitle: "",
  setAudioTitle: () => {},
  audioSrc: "",
  setAudioSrc: () => {},
  audioImage: "",
  setAudioImage: () => {},
  isPlaying: false,
  setIsPlaying: () => {},
});

export const useMusicContext = () => useContext(MusicContext);
