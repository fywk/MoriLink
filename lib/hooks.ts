import { createContext, useContext } from "react";

type MusicContextType = {
  audio: HTMLAudioElement | null;
  setAudio(value: HTMLAudioElement): void;
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
  audio: null,
  setAudio: () => {},
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
