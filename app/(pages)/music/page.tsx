import { IconClockPlay, IconPlayerPlayFilled } from "@tabler/icons-react";
import Image from "next/image";

import HourlyMusic from "@/components/HourlyMusic";
import KKMusic from "@/components/KKMusic";
import NowPlaying from "@/components/NowPlaying";
import PageLayout from "@/components/PageLayout";
import Tooltips from "@/components/Tooltips";
import kkSongs from "@/data/music/kk_slider.json";

import type { Metadata, Viewport } from "next";

const title = "Music";
const themeColor = "#def4b9";

export const metadata: Metadata = {
  title,
};

export const viewport: Viewport = {
  themeColor,
};

export default function MusicPage() {
  return (
    <PageLayout title={title} themeColor={themeColor} mainBackground={themeColor}>
      <div className="px-safe pb-safe">
        <NowPlaying />
        <div className="mx-auto grid max-w-3xl grid-cols-2 gap-4 px-7 pt-22 pb-14 sm:grid-cols-3 sm:px-9 md:grid-cols-4 md:px-11">
          <HourlyMusic playingBadge={<HourlyPlayingBadge />}>
            <Tooltips>Hourly Music</Tooltips>
            <IconClockPlay width={52} height={52} stroke={1.5} />
          </HourlyMusic>
          {kkSongs.map((song, index) => (
            <KKMusic
              music={{
                title: song.name,
                src: song.music.src,
                image: song.albumArt.src,
              }}
              playingBadge={<KKPlayingBadge />}
              key={song.id}
            >
              <Tooltips>{song.name}</Tooltips>
              <picture className="rounded-sm" style={{ backgroundColor: song.albumArt.colour }}>
                <Image
                  src={song.albumArt.src}
                  width={512}
                  height={512}
                  alt=""
                  priority={index < 2}
                  className="rounded-sm"
                  draggable={false}
                />
              </picture>
            </KKMusic>
          ))}
        </div>
      </div>
    </PageLayout>
  );
}

function HourlyPlayingBadge() {
  return (
    <div className="absolute -top-2.5 -left-2.5 z-10 flex h-5.5 w-9 items-center justify-center rounded-full bg-[#f96549] text-[#f8ee8f]">
      <IconPlayerPlayFilled className="size-4" />
    </div>
  );
}

function KKPlayingBadge() {
  return (
    <div className="absolute -top-1 -left-1 z-10 flex h-5.5 w-9 items-center justify-center rounded-tl-xl rounded-br-2xl bg-[#48c058] text-alabaster">
      <IconPlayerPlayFilled className="size-4" />
    </div>
  );
}
