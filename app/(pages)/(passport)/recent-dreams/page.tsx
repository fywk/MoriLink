import Image from "next/image";

import ModalOpener from "@/components/ModalOpener";
import PageLayout from "@/components/PageLayout";
import { island, player } from "@/lib/config";
import { getStarSign, getStarSignColour } from "@/lib/utils/miscellaneous";
import spriteIsland from "@/public/images/sprites/Island.png";
import spriteTownIsland from "@/public/images/sprites/Town_Island.png";

import type { Metadata } from "next";

const TITLE = "Recent dreams";

export const metadata: Metadata = {
  title: TITLE,
  themeColor: "#b4e4b5",
};

export default function RecentDreamsPage() {
  const starSign = getStarSign(player.birth.month, player.birth.day);
  const starSignColour = getStarSignColour(starSign);
  const dreamUpdated = island.dream ? island.dream.updated.date : "----";

  return (
    <PageLayout
      title={TITLE}
      navbarBgClass="bg-[#b4e4b5]"
      parentPage="/passport"
    >
      <div
        className="bg-pearl"
        style={{ ["--star-sign-colour" as any]: starSignColour }}
      >
        <div className="mx-auto w-full max-w-xl space-y-3.5 px-5 py-7">
          <p className="font-bold leading-none tracking-[-0.0125em] text-dark-bronze-coin">
            {"Your island's dream:"}
          </p>
          <ModalOpener
            modalContent={<IslandDreamModal starSignColour={starSignColour} />}
          >
            <div className="flex w-full items-center gap-x-2 rounded-2xl bg-alabaster p-5 text-left transition-colors hover:bg-bone active:bg-bone">
              <div className="relative">
                <Image
                  src={spriteIsland}
                  alt=""
                  priority
                  unoptimized
                  draggable={false}
                  className="h-auto w-16"
                />
                <div className="absolute bottom-0.5 right-2 h-7.5 w-7.5 rounded-full bg-alabaster p-[3px]">
                  <div className="h-full w-full rounded-full bg-[rgb(var(--star-sign-colour))]"></div>
                </div>
              </div>
              <div className="space-y-3 pt-1">
                <h2 className="text-[1.375rem]/none font-bold tracking-[-0.0125em] text-dark-bronze-coin">
                  {island.name}
                </h2>
                <p className="text-sm/none font-bold tracking-[-0.0125em] text-beaver">{`Dream updated: ${dreamUpdated}`}</p>
              </div>
            </div>
          </ModalOpener>
        </div>
      </div>
      <div className="mx-auto max-w-xl space-y-5 px-5 py-7">
        <p className="font-bold tracking-[-0.0125em] text-dark-bronze-coin">
          Recent dreams
        </p>
        <div className="space-y-2">
          <p className="text-xs/none font-bold tracking-tight text-beaver">
            {"Visited dream on 20/3/2023"}
          </p>
          <div className="flex items-center gap-x-1">
            <Image
              src={spriteTownIsland}
              alt=""
              priority
              unoptimized
              draggable={false}
              className="h-5 w-5"
            />
            <h3 className="text-lg/none font-bold tracking-[-0.0125em] text-dark-bronze-coin">
              {"Ninten"}
            </h3>
          </div>
          <p className="text-sm/none font-bold tracking-tight text-beaver">
            {"Last updated: 25/3/2022"}
          </p>
        </div>
      </div>
    </PageLayout>
  );
}

function IslandDreamModal({ starSignColour }: { starSignColour: string }) {
  const dreamAddress = island.dream?.address ?? "---- ---- ---- ----";
  const dreamUpdated = island.dream
    ? `${island.dream.updated.date} ${island.dream.updated.time}`
    : "----";

  return (
    <div
      className="flex flex-col items-center gap-y-4 text-center"
      style={{ ["--star-sign-colour" as any]: starSignColour }}
    >
      <div className="flex items-center gap-x-2">
        <Image
          src={spriteTownIsland}
          alt=""
          unoptimized
          draggable={false}
          className="h-9 w-9"
        />
        <h3 className="text-[1.375rem]/none font-bold tracking-[-0.0125em] text-dark-bronze-coin">
          {island.name}
        </h3>
      </div>
      <div className="space-y-px">
        <h4 className="text-lg/none font-bold tracking-[-0.0125em] text-beaver">
          Dream Address
        </h4>
        <p className="text-lg font-bold tracking-[-0.0125em] text-[#a364d5]">
          {dreamAddress}
        </p>
      </div>
      <div className="my-0.5 space-y-2">
        <div className="h-[4.5rem] w-[4.5rem] rounded-full bg-[rgb(var(--star-sign-colour))]"></div>
        <h4 className="text-sm font-bold tracking-[-0.0125em] text-dark-bronze-coin">
          {player.name}
        </h4>
      </div>
      <div className="text-sm font-bold tracking-tight text-beaver">
        <p>Latest dreams updated</p>
        <p>{dreamUpdated}</p>
      </div>
    </div>
  );
}
