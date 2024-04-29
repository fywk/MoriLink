import { IconChevronLeft, IconCopy, IconPennantFilled } from "@tabler/icons-react";
import clsx from "clsx";
import Image from "next/image";

import CopyToClipboardButton from "@/components/CopyToClipboardButton";
import NookIncEmblem from "@/components/icons/NookIncEmblem";
import ModalOpener from "@/components/ModalOpener";
import PageLayout from "@/components/PageLayout";
import VillagerAvatar from "@/components/VillagerAvatar";
import { island, player } from "@/lib/config";
import { DATE_FORMAT_MEDIUM, DATE_FORMAT_SHORT, ID_PLACEHOLDER } from "@/lib/constants";
import dayjs from "@/lib/utils/dayjs";
import { getPassportPhoto } from "@/lib/utils/image";
import { getStarSign, getStarSignColour } from "@/lib/utils/star-sign";
import { getVillager } from "@/lib/utils/villagers";
import spriteTownIsland from "@/public/images/sprites/Town_Island.png";

import type { Metadata, Viewport } from "next";

const title = "Passport";
const themeColor = "#b4e4b5";

export const metadata: Metadata = {
  title,
};

export const viewport: Viewport = {
  themeColor
}

export default function PassportPage() {
  return (
    <PageLayout
      title={title}
      themeColor={themeColor}
      mainBackground="fixed repeating-linear-gradient(#f5f0e3, #f5f0e3 10px, #f2eedd 10px, #f2eedd 17px)"
    >
      <div className="mx-auto max-w-xl px-3 pb-[calc(3.5rem+env(safe-area-inset-bottom))]">
        <CardSection />
        <MiddleSection />
        <ResidentsSection />
      </div>
    </PageLayout>
  );
}

async function CardSection() {
  const passportPhoto = await getPassportPhoto();

  const birthday = dayjs()
    .month(player.birth.month - 1)
    .date(player.birth.day)
    .format(DATE_FORMAT_SHORT);
  const starSign = getStarSign(player.birth.month, player.birth.day);
  const starSignColour = getStarSignColour(starSign);
  const registrationDate = dayjs()
    .year(player.registrationDate.year)
    .month(player.registrationDate.month - 1)
    .date(player.registrationDate.day)
    .format(DATE_FORMAT_MEDIUM);

  return (
    <section
      className="mb-8 rounded-b-3xl bg-[#faf7da] p-2 shadow-lg"
      style={{ ["--star-sign-colour" as any]: starSignColour }}
    >
      <div className="grid grid-cols-1 overflow-hidden rounded-2xl">
        <div className="bg-[rgb(var(--star-sign-colour)/.05)]">
          <span className="mx-auto flex w-32 justify-center py-2 text-[9px]/none font-bold uppercase tracking-tight text-[rgb(var(--star-sign-colour))] brightness-[.85] saturate-[.75] before:m-auto before:mr-2 before:flex-1 before:border-b before:border-[rgb(var(--star-sign-colour))] after:m-auto after:ml-2 after:flex-1 after:border-b after:border-[rgb(var(--star-sign-colour))]">
            Passport
          </span>
        </div>
        <div className="relative flex gap-x-3.5 bg-[rgb(var(--star-sign-colour)/.15)] px-5 py-3">
          <div className="relative h-fit basis-1/5">
            <div className="aspect-square h-fit w-full min-w-[5.75rem] rounded-xl bg-[#faf7da] p-1.5">
              <Image
                src={passportPhoto.url}
                width={passportPhoto.width}
                height={passportPhoto.height}
                alt=""
                quality={100}
                priority
                className="aspect-square overflow-hidden rounded-lg bg-[rgb(var(--star-sign-colour)/.25)]"
                draggable={false}
              />
            </div>
            {player.isResidentRep && (
              <div className="absolute -bottom-5 right-2 flex w-max rotate-[4deg] items-center gap-x-1 rounded border-[3px] border-double border-[#98744e] p-[3px]">
                <div className="flex h-3 w-3 items-center justify-center rounded-sm bg-[#98744e] text-[#faf7da]">
                  <IconPennantFilled size={10} />
                </div>
                <span className="pr-1 text-[9px]/none font-[750] tracking-tight text-[#98744e]">
                  Resident Rep.
                </span>
              </div>
            )}
          </div>
          <div className="z-10 flex flex-grow basis-4/5 flex-col gap-y-2">
            <p className="w-fit max-w-[24ch] overflow-hidden text-ellipsis whitespace-nowrap rounded-full bg-[#faf7da] px-2.5 py-1.5 text-[13px]/none font-bold text-dark-bronze-coin/70">
              {player.comment}
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
            <h4 className="text-[13px]/none font-bold text-dark-bronze-coin">{player.title}</h4>
            <hr className="w-2/3 border-[1.5px] border-[#faf7da]" />
            <h2 className="text-[22px]/none font-[750] tracking-tight text-dark-bronze-coin">
              {player.name}
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
              <p className="text-[13px]/none font-bold text-dark-bronze-coin/60">{`Birthday: ${birthday}`}</p>
            </div>
          </div>
          <div className="absolute bottom-2 right-2 aspect-square w-1/4 text-[#faf7da]">
            <NookIncEmblem />
          </div>
        </div>
        <div className="flex items-center justify-between bg-[rgb(var(--star-sign-colour)/.05)] px-5 pb-3.5 pt-5 text-dark-bronze-coin/70">
          <p className="text-[11px]/none font-bold tracking-tight">{`Registered on: ${registrationDate}`}</p>
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

function MiddleSection() {
  const placeholder = ID_PLACEHOLDER;

  return (
    <section className="mb-10 flex flex-col gap-y-8 px-2.5">
      <DisclosureWidget
        title="Custom design Creator ID"
        description={player.creatorID ?? placeholder}
        descColour="text-[#f36f7d]"
      />
      <DisclosureWidget
        title="Dream Address"
        description={island.dreamAddress ?? placeholder}
        descColour="text-[#a364d5]"
      />
      {player.happyHomeNetworkID && (
        <DisclosureWidget title="Happy Home Network ID" description={player.happyHomeNetworkID} />
      )}
    </section>
  );
}

function DisclosureWidget({
  title,
  description,
  descColour = "text-[#41352f]",
}: {
  title: string;
  description: string;
  descColour?: string;
}) {
  return (
    <details className="px-2 text-[15.5px]/none font-bold" open={true}>
      <summary className="select-none tracking-tight text-dark-bronze-coin/70">{title}</summary>
      <div className="ml-3 mt-5.5 flex h-7.5 items-center justify-between">
        <p className={clsx("font-[750]", descColour)}>{description}</p>
        <CopyToClipboardButton text={description}>
          <div className="flex h-full items-center gap-x-[3px] border-l-2 border-dark-bronze-coin/[.15] pl-2 text-dark-bronze-coin/75">
            <IconCopy size={19} stroke={2.25} />
            Copy
          </div>
        </CopyToClipboardButton>
      </div>
    </details>
  );
}

function ResidentsSection() {
  return (
    <section className="px-3 text-dark-bronze-coin">
      <h2 className="mb-6 text-[16.5px]/none font-bold tracking-tight">{`Residents of ${island.name}`}</h2>
      <div className="grid grid-cols-3 gap-x-9 gap-y-5.5 px-1">
        {island.residents.current.map((resident, i) => (
          <ModalOpener modalContent={<ResidentModal name={resident} />} key={i}>
            <Resident name={resident} />
          </ModalOpener>
        ))}
      </div>
      {"former" in island.residents && (
        <>
          <h3 className="mb-6 mt-10 font-bold leading-none tracking-tight">Former residents</h3>
          <div className="grid grid-cols-4 gap-x-8 gap-y-5.5 px-1">
            {island.residents.former?.map((resident, i) => (
              <ModalOpener modalContent={<ResidentModal name={resident} />} key={i}>
                <Resident name={resident} />
              </ModalOpener>
            ))}
          </div>
        </>
      )}
    </section>
  );
}

function Resident({ name }: { name: string }) {
  const villager = getVillager(name);

  if (!villager) return null;

  return (
    <div className="flex flex-col items-center gap-y-1.5">
      <VillagerAvatar src={villager.iconImage} />
      <p className="text-sm/none font-bold tracking-tight">{villager.name}</p>
    </div>
  );
}

function ResidentModal({ name }: { name: string }) {
  const villager = getVillager(name);

  if (!villager) return null;

  // Convert birthday string in the format of mm/dd to dd/mm
  const birth = villager.birthday.split("/");
  const birthday = dayjs()
    .month(+birth[0] - 1)
    .date(+birth[1])
    .format(DATE_FORMAT_SHORT);

  return (
    <div className="flex flex-col items-center justify-center gap-y-3 tracking-tight">
      <VillagerAvatar src={villager.iconImage} extraClasses="max-w-[7.5rem]" />
      <h1>
        <a
          href={`https://nookipedia.com/wiki/${villager.name}`}
          className="text-[22px] font-bold text-dark-bronze-coin decoration-dotted underline-offset-4 ring-tiffany-blue hover:underline focus:outline-none focus-visible:ring-3"
          title={`Nookipedia: ${villager.name}`}
          target="_blank"
        >
          {villager.name}
        </a>
      </h1>
      <div className="grid w-full max-w-sm grid-cols-3 divide-x-4 divide-alabaster overflow-hidden rounded-xl text-center text-[15px]">
        <div className="flex flex-col divide-y-4 divide-alabaster font-bold">
          <div className="bg-pearl py-0.5 text-beaver">Species</div>
          <div className="bg-pearl/[.35] py-0.5 text-dark-bronze-coin">{villager.species}</div>
        </div>
        <div className="flex flex-col divide-y-4 divide-alabaster font-bold">
          <div className="bg-pearl py-0.5 text-beaver">Personality</div>
          <div className="bg-pearl/[.35] py-0.5 text-dark-bronze-coin">{villager.personality}</div>
        </div>
        <div className="flex flex-col divide-y-4 divide-alabaster font-bold">
          <div className="bg-pearl py-0.5 text-beaver">Birthday</div>
          <div className="bg-pearl/[.35] py-0.5 text-dark-bronze-coin">{birthday}</div>
        </div>
      </div>
    </div>
  );
}
