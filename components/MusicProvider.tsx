"use client";

import { useEffect, useState } from "react";

import { MusicContext } from "@/lib/hooks";

export default function MusicProvider({ children }: { children: React.ReactNode }) {
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);
  const [audioTitle, setAudioTitle] = useState("");
  const [audioSrc, setAudioSrc] = useState("");
  const [audioImage, setAudioImage] = useState("");
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    setAudio(new Audio());
  }, []);

  useEffect(() => {
    audio?.setAttribute("src", audioSrc);
    if (audioSrc) {
      audio?.play();
    } else {
      setIsPlaying(false);
    }
  }, [audio, audioSrc, setIsPlaying]);

  useEffect(() => {
    audio?.addEventListener("playing", () => setIsPlaying(true));
    audio?.addEventListener("pause", () => setIsPlaying(false));
    audio?.addEventListener("ended", () => {
      setIsPlaying(false);
      setAudioTitle("");
      setAudioSrc("");
      setAudioImage("");
    });
    audio?.addEventListener("error", () => {
      setAudioTitle("");
      setAudioSrc("");
      setAudioImage("");
    });
  }, [audio, setAudioTitle, setAudioSrc, setIsPlaying]);

  useEffect(() => {
    if (isPlaying) {
      if (!("mediaSession" in navigator)) return;

      navigator.mediaSession.metadata = new window.MediaMetadata({
        title: audioTitle,
        artist: audioSrc.includes("hourly") ? "Kazumi Totaka" : "K.K. Slider",
        album: "Animal Crossing: New Horizons",
        artwork: [{ src: audioImage, sizes: "512x512" }],
      });
    }
  }, [audioTitle, audioSrc, audioImage, isPlaying]);

  return (
    <MusicContext.Provider
      value={{
        audio,
        setAudio,
        audioTitle,
        setAudioTitle,
        audioSrc,
        setAudioSrc,
        audioImage,
        setAudioImage,
        isPlaying,
        setIsPlaying,
      }}
    >
      {children}
    </MusicContext.Provider>
  );
}
