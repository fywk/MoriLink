import { Metadata } from "next";
import Image from "next/image";

import HourlyMusic from "@/components/HourlyMusic";
import KKMusic from "@/components/KKMusic";
import NowPlaying from "@/components/NowPlaying";
import PageLayout from "@/components/PageLayout";
import Tooltips from "@/components/Tooltips";
import kkSongs from "@/data/music/kk_slider.json";
import { IconClockPlay, IconPlayerPlayFilled } from "@tabler/icons-react";

const TITLE = "Music";

export const metadata: Metadata = {
  title: TITLE,
  themeColor: "#def4b9",
};

export default function MusicPage() {
  return (
    <PageLayout
      title={TITLE}
      navbarBgClass="bg-[#def4b9]"
      bgClass="bg-[#def4b9]"
    >
      <NowPlaying />
      <div className="scroll-behaviour-smooth mx-auto max-w-3xl gap-y-6 px-7 pb-14 pt-[5.5rem]">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
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
              <Image
                src={song.albumArt.src}
                width={512}
                height={512}
                alt=""
                quality={80}
                priority={index < 2}
                draggable={false}
                className="rounded"
                style={{ backgroundColor: song.albumArt.colour }}
              />
            </KKMusic>
          ))}
        </div>
      </div>
    </PageLayout>
  );
}

function HourlyPlayingBadge() {
  return (
    <div className="absolute -left-2.5 -top-2.5 z-10 flex h-5.5 w-9 items-center justify-center rounded-full bg-[#f96549] text-[#f8ee8f]">
      <IconPlayerPlayFilled className="h-4 w-4" />
    </div>
  );
}

function KKPlayingBadge() {
  return (
    <div className="absolute -left-1 -top-1 z-10 flex h-5.5 w-9 items-center justify-center rounded-br-2xl rounded-tl-xl bg-[#48c058] text-alabaster">
      <IconPlayerPlayFilled className="h-4 w-4" />
    </div>
  );
}
