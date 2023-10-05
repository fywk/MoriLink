import { IconArrowUpRight, IconChevronLeft } from "@tabler/icons-react";
import Image from "next/image";
import { notFound } from "next/navigation";

import NookIncEmblem from "@/components/icons/NookIncEmblem";
import PageLayout from "@/components/PageLayout";
import { island } from "@/lib/config";
import { DATE_FORMAT_SHORT, NOOKIPEDIA_WIKI_LINK } from "@/lib/constants";
import dayjs from "@/lib/utils/dayjs";
import { getStarSign, getStarSignColour } from "@/lib/utils/star-sign";
import { getVillager } from "@/lib/utils/villagers";
import spriteTownIsland from "@/public/images/sprites/Town_Island.png";

import type { Metadata } from "next";

import type { Day, Month } from "@/lib/types/date";
import type { Villager } from "@/lib/utils/villagers";

type Props = {
  params: { name: string };
};

const themeColor = "#b4e4b5";

export function generateMetadata({ params }: Props): Metadata {
  return {
    title: `${params.name} - Resident of ${island.name}`,
    themeColor,
  };
}

export function generateStaticParams() {
  return island.residents.current.map((currentResident) => ({
    name: currentResident,
  }));
}

export default function ResidentPage({ params }: Props) {
  const villager = getVillager(params.name);

  if (!villager) notFound();

  return (
    <PageLayout
      title="Resident"
      themeColor={themeColor}
      mainBackground="fixed repeating-linear-gradient(#f5f0e3, #f5f0e3 10px, #f2eedd 10px, #f2eedd 17px)"
      parentPage="/passport"
    >
      <div className="mx-auto max-w-xl px-3 pb-[calc(3.5rem+env(safe-area-inset-bottom))]">
        <ResidentPassport resident={villager} />
      </div>
    </PageLayout>
  );
}

async function ResidentPassport({ resident }: { resident: Villager }) {
  const birthday = resident.birthday.split("/"); // in "MM/DD" format
  const birthMonth = +birthday[0];
  const birthDay = +birthday[1];
  const birthdayFmtString = dayjs()
    .month(birthMonth - 1)
    .date(birthDay)
    .format(DATE_FORMAT_SHORT);

  const starSign = getStarSign(birthMonth as Month, birthDay as Day);
  const starSignColour = getStarSignColour(starSign);

  return (
    <section
      className="mb-8 rounded-b-3xl bg-[#faf7da] p-2 shadow-lg"
      style={{
        ["--star-sign-colour" as any]: starSignColour,
        ["--speech-colour" as any]: resident.nameColor,
        ["--speech-background" as any]: resident.bubbleColor,
      }}
    >
      <div className="grid grid-rows-[auto_auto_45px] overflow-hidden rounded-2xl">
        <div className="bg-[rgb(var(--star-sign-colour)/.05)]">
          <span className="mx-auto flex w-32 justify-center py-2 text-[9px]/none font-bold uppercase tracking-tight text-[rgb(var(--star-sign-colour))] brightness-[.85] saturate-[.75] before:m-auto before:mr-2 before:flex-1 before:border-b before:border-[rgb(var(--star-sign-colour))] after:m-auto after:ml-2 after:flex-1 after:border-b after:border-[rgb(var(--star-sign-colour))]">
            Passport
          </span>
        </div>
        <div className="relative flex gap-x-3.5 bg-[rgb(var(--star-sign-colour)/.15)] px-5 py-3">
          <div className="relative h-fit basis-1/5">
            <div className="aspect-square h-fit w-full min-w-[5.75rem] rounded-xl bg-[#faf7da] p-1.5">
              <Image
                src={resident.photoImage}
                width="256"
                height="256"
                alt=""
                quality={100}
                priority
                className="aspect-square overflow-hidden rounded-lg bg-[rgb(var(--star-sign-colour)/.25)]"
                draggable={false}
              />
            </div>
          </div>
          <div className="z-10 flex flex-grow basis-4/5 flex-col gap-y-2">
            <p
              className="w-fit max-w-[24ch] overflow-hidden text-ellipsis whitespace-nowrap rounded-full bg-[var(--speech-background)] px-2.5 py-1.5 text-[13px]/none font-[750] text-[var(--speech-colour)]"
              title={resident.favoriteSaying}
            >
              {resident.catchphrase}
            </p>
            <div className="flex text-xs/none font-bold">
              <div className="flex basis-1/2 items-center gap-x-0.5 text-dark-bronze-coin">
                <div className="h-4 w-4">
                  <Image src={spriteTownIsland} alt="" unoptimized draggable={false} />
                </div>
                {island.name}
              </div>
              <div className="flex basis-1/2 items-center gap-x-0.5 text-dark-bronze-coin/60">
                <div className="h-4 w-4">
                  <Image
                    src={`/images/sprites/fruit/${island.nativeFruit}.png`}
                    width={64}
                    height={64}
                    alt=""
                    unoptimized
                    draggable={false}
                  />
                </div>
                {island.nativeFruit}
              </div>
            </div>
            <hr className="border-[1.5px] border-[#faf7da]" />
            <h4 className="text-[13px]/none font-bold capitalize text-dark-bronze-coin">
              {`${resident.personality} ${resident.species}`}
            </h4>
            <hr className="w-2/3 border-[1.5px] border-[#faf7da]" />
            <h2
              className="group flex items-center gap-x-px text-[22px]/none font-[750] tracking-tight text-dark-bronze-coin"
              title={`Nookipedia: ${resident.name}`}
            >
              <a
                href={`${NOOKIPEDIA_WIKI_LINK}/${resident.name}`}
                target="_blank"
                rel="noreferrer"
              >
                {resident.name}
              </a>
              <IconArrowUpRight size={22} stroke={2.5} className="hidden group-hover:block" />
            </h2>
            <hr className="w-2/3 border-[1.5px] border-[#faf7da]" />
            <div className="flex items-center gap-x-0.5">
              <Image
                src={`/images/sprites/star-sign/${starSign}.svg`}
                width={16}
                height={16}
                alt={`${starSign} star sign icon`}
                draggable={false}
              />
              <p className="text-[13px]/none font-bold text-dark-bronze-coin/60">{`Birthday: ${birthdayFmtString}`}</p>
            </div>
          </div>
          <div className="absolute bottom-2 right-2 aspect-square w-1/4 text-[#faf7da]">
            <NookIncEmblem />
          </div>
        </div>
        <div className="flex items-center justify-between bg-[rgb(var(--star-sign-colour)/.05)] px-5 pb-3.5 pt-5 text-dark-bronze-coin/70">
          <p className="bg-[rgb(var(--star-sign-colour)/.1)] px-1 py-0.5 text-[11px]/none font-semibold ring-1 ring-[rgb(var(--star-sign-colour)/.5)]">
            {resident.filename}
          </p>
          <div className="flex -space-x-0.5">
            {[...Array<undefined>(12)].map((_, i) => (
              <IconChevronLeft size={9} stroke={2.5} key={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
