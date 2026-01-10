"use client";

import { useEffect, useRef, useState } from "react";

import { HOURLY_MUSIC_TITLE_PATTERN } from "@/lib/constants";
import { MusicContext } from "@/lib/hooks";

export default function MusicProvider({ children }: { children: React.ReactNode }) {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const [audioTitle, setAudioTitle] = useState("");
  const [audioSrc, setAudioSrc] = useState("");
  const [audioImage, setAudioImage] = useState("");
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio();
    }
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.src = audioSrc;

    if (audioSrc) {
      audio.play();
    } else {
      audio.pause();
    }
  }, [audioSrc]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handlePlaying = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    const handleEnded = () => {
      setIsPlaying(false);
      setAudioTitle("");
      setAudioSrc("");
      setAudioImage("");
    };
    const handleError = () => {
      setIsPlaying(false);
      setAudioTitle("");
      setAudioSrc("");
      setAudioImage("");
    };

    audio.addEventListener("playing", handlePlaying);
    audio.addEventListener("pause", handlePause);
    audio.addEventListener("ended", handleEnded);
    audio.addEventListener("error", handleError);

    return () => {
      audio.removeEventListener("playing", handlePlaying);
      audio.removeEventListener("pause", handlePause);
      audio.removeEventListener("ended", handleEnded);
      audio.removeEventListener("error", handleError);
    };
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      if (!("mediaSession" in navigator)) return;

      navigator.mediaSession.metadata = new window.MediaMetadata({
        title: audioTitle,
        artist: HOURLY_MUSIC_TITLE_PATTERN.test(audioTitle) ? "Kazumi Totaka" : "K.K. Slider",
        album: "Animal Crossing: New Horizons",
        artwork: [{ src: audioImage, sizes: "512x512" }],
      });
    }
  }, [audioTitle, audioSrc, audioImage, isPlaying]);

  return (
    <MusicContext.Provider
      value={{
        audioRef,
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
