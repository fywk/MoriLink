import { IconChevronLeft, IconChevronRight, IconPennantFilled } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";

import ModalOpener from "@/components/ModalOpener";
import PageLayout from "@/components/PageLayout";
import { island, player } from "@/lib/config";
import { getVillager } from "@/lib/utils/get-villager";
import { getStarSign, getStarSignColour } from "@/lib/utils/star-sign";
import spriteNookInc from "@/public/images/sprites/Nook_Inc.svg";
import spriteTownIsland from "@/public/images/sprites/Town_Island.png";

import type { Metadata } from "next";

const TITLE = "Passport";

export const metadata: Metadata = {
  title: TITLE,
  themeColor: "#b4e4b5",
};

export default function PassportPage() {
  return (
    <PageLayout
      title={TITLE}
      navbarBgClass="bg-[#b4e4b5]"
      mainBgClass="bg-[repeating-linear-gradient(#f5f0e3,_#f5f0e3_10px,_#f2eedd_10px,_#f2eedd_17px)] bg-fixed"
    >
      <div className="mx-auto max-w-xl px-3 pb-[calc(3.5rem+env(safe-area-inset-bottom))]">
        <CardSection />
        <MiddleSection />
        <ResidentsSection />
      </div>
    </PageLayout>
  );
}

function CardSection() {
  const birthday = `${player.birth.day}/${player.birth.month}`;
  const starSign = getStarSign(player.birth.month, player.birth.day);
  const starSignColour = getStarSignColour(starSign);

  return (
    <section
      className="mb-8 rounded-b-3xl bg-[#faf7da] p-2 shadow-lg"
      style={{ ["--star-sign-colour" as any]: starSignColour }}
    >
      <div className="grid grid-cols-1 overflow-hidden rounded-2xl">
        <div className="bg-[rgb(var(--star-sign-colour)/0.05)]">
          <span className="mx-auto flex w-32 justify-center py-2 text-[9px]/none font-bold uppercase tracking-tight text-[rgb(var(--star-sign-colour))] before:m-auto before:mr-2 before:flex-1 before:border-b before:border-[rgb(var(--star-sign-colour))] after:m-auto after:ml-2 after:flex-1 after:border-b after:border-[rgb(var(--star-sign-colour))]">
            Passport
          </span>
        </div>
        <div className="relative flex gap-x-2.5 bg-[rgb(var(--star-sign-colour)/0.15)] px-5 py-3">
          <div className="relative">
            <div className="aspect-square h-fit w-1/5 min-w-[5.5rem] rounded-xl bg-[#faf7da] p-1.5">
              <div className="aspect-square overflow-hidden rounded-lg bg-[rgb(var(--star-sign-colour)/0.25)]"></div>
            </div>
            {player.isResidentRep && (
              <div className="relative bottom-1 right-2 flex w-fit rotate-3 items-center gap-x-[5px] border-[3px] border-double border-[#98744e] p-1">
                <div className="flex h-3 w-3 items-center justify-center bg-[#98744e] text-[#faf7da]">
                  <IconPennantFilled size={10} />
                </div>
                <span className="text-[10px]/none font-[750] tracking-tight text-[#98744e]">
                  Resident Rep.
                </span>
              </div>
            )}
          </div>
          <div className="flex flex-grow flex-col gap-y-2">
            <p className="w-fit max-w-[24ch] overflow-hidden text-ellipsis whitespace-nowrap rounded-full bg-[#faf7da] px-2.5 py-1.5 text-[13px]/none font-bold text-dark-bronze-coin/70">
              {player.comment}
            </p>
            <div className="flex text-xs/none font-bold">
              <div className="flex basis-1/2 items-center gap-x-1 text-dark-bronze-coin">
                <div className="h-4 w-4">
                  <Image src={spriteTownIsland} alt="" unoptimized draggable={false} />
                </div>
                {island.name}
              </div>
              <div className="flex basis-1/2 items-center gap-x-1 text-dark-bronze-coin/60">
                <div className="h-4 w-4">
                  <Image
                    src={`/images/sprites/Fruit_${island.nativeFruit}.png`}
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
            <div className="flex items-center gap-x-1">
              <div className="h-4 w-4">
                <Image
                  src={`/images/sprites/Starsign_${starSign}.png`}
                  width={80}
                  height={80}
                  alt=""
                  unoptimized
                  draggable={false}
                />
              </div>
              <p className="text-[13px]/none font-bold text-dark-bronze-coin/60">{`Birthday: ${birthday}`}</p>
            </div>
          </div>
          <div className="absolute bottom-2 right-2 aspect-square w-1/4 opacity-[0.125]">
            <Image src={spriteNookInc} alt="" draggable={false} />
          </div>
        </div>
        <div className="flex items-center justify-between bg-[rgb(var(--star-sign-colour)/0.05)] px-5 pb-3.5 pt-5 text-dark-bronze-coin/70">
          <p className="text-xs/none font-bold">{`Registered on: ${player.registrationDate}`}</p>
          <div className="flex -space-x-0.5">
            {[...Array<undefined>(12)].map((_, i) => (
              <IconChevronLeft size={10} stroke={2.5} key={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function MiddleSection() {
  const placeholder = "---- ---- ---- ---- ----";

  return (
    <section className="mb-10 flex flex-col gap-y-8 px-2.5">
      <DisclosureWidget
        title="Custom design creator ID"
        description={player.creatorID ?? placeholder}
        descColour="text-[#f36f7d]"
      />
      <DisclosureWidget
        title="Dream Address"
        description={island.dream?.address ?? placeholder}
        descColour="text-[#a364d5]"
      />
      {player.happyHomeNetworkID && (
        <DisclosureWidget title="Happy Home Network ID" description={player.happyHomeNetworkID} />
      )}
      <Link
        href="/recent-dreams"
        className="flex items-center justify-between border-y-2 border-dashed border-[#dbd8bf] px-3 py-2.5 hover:bg-[#ece5d4] active:bg-[#ece5d4]"
      >
        <span className="text-[17.5px] font-bold text-dark-bronze-coin">Recent dreams</span>
        <IconChevronRight size={20} stroke={3} className="text-dark-bronze-coin/70" />
      </Link>
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
    <details className="px-2 text-[15.5px]/none" open={true}>
      <summary className="select-none font-bold tracking-tight text-dark-bronze-coin/70">
        {title}
      </summary>
      <div className="ml-3 mt-7 font-[750]">
        <p className={descColour}>{description}</p>
      </div>
    </details>
  );
}

function ResidentsSection() {
  return (
    <section className="px-3 text-dark-bronze-coin">
      <h2 className="mb-6 text-[17px]/none font-bold tracking-tight">{`Residents of ${island.name}`}</h2>
      <div className="grid grid-cols-3 gap-x-9 gap-y-5.5 px-1">
        {island.residents.current.map((resident, i) => (
          <ModalOpener modalContent={<ResidentModal name={resident} />} key={i}>
            <ResidentAvatar name={resident} />
          </ModalOpener>
        ))}
      </div>
      {"former" in island.residents && (
        <>
          <h3 className="mb-6 mt-10 font-bold leading-none tracking-tight">Former residents</h3>
          <div className="grid grid-cols-4 gap-x-8 gap-y-5.5 px-1">
            {island.residents.former?.map((resident, i) => (
              <ModalOpener modalContent={<ResidentModal name={resident} />} key={i}>
                <ResidentAvatar name={resident} />
              </ModalOpener>
            ))}
          </div>
        </>
      )}
    </section>
  );
}

function ResidentAvatar({ name }: { name: string }) {
  const villager = getVillager(name);

  if (!villager) return null;

  return (
    <div className="flex flex-col items-center gap-y-1.5">
      <div className="flex aspect-square items-center justify-center overflow-hidden rounded-full bg-[#faf7da] p-1">
        <Image
          src={villager.iconImage}
          width={128}
          height={128}
          alt=""
          unoptimized
          draggable={false}
          className="rounded-full bg-pearl"
        />
      </div>
      <p className="text-sm/none font-bold tracking-tight">{villager.name}</p>
    </div>
  );
}

function ResidentModal({ name }: { name: string }) {
  const villager = getVillager(name);

  if (!villager) return null;

  // Convert birthday string from mm/dd to dd/mm format
  const birth = villager.birthday.split("/");
  const birthday = `${birth[1]}/${birth[0]}`;

  return (
    <div className="flex flex-col items-center justify-center gap-y-3 tracking-tight">
      <div className="flex aspect-square max-w-[7.5rem] items-center justify-center overflow-hidden rounded-full bg-[#faf7da] p-1">
        <Image
          src={villager.iconImage}
          width={128}
          height={128}
          alt=""
          unoptimized
          draggable={false}
          className="rounded-full bg-pearl"
        />
      </div>
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
          <div className="bg-pearl/[0.35] py-0.5 text-dark-bronze-coin">{villager.species}</div>
        </div>
        <div className="flex flex-col divide-y-4 divide-alabaster font-bold">
          <div className="bg-pearl py-0.5 text-beaver">Personality</div>
          <div className="bg-pearl/[0.35] py-0.5 text-dark-bronze-coin">{villager.personality}</div>
        </div>
        <div className="flex flex-col divide-y-4 divide-alabaster font-bold">
          <div className="bg-pearl py-0.5 text-beaver">Birthday</div>
          <div className="bg-pearl/[0.35] py-0.5 text-dark-bronze-coin">{birthday}</div>
        </div>
      </div>
    </div>
  );
}
