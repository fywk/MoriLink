import Image from "next/image";

import PageLayout from "@/components/PageLayout";
import { getImageURL } from "@/lib/cloudinary";
import { island } from "@/lib/config";

import type { Metadata } from "next";

const TITLE = "Map";

export const metadata: Metadata = {
  title: TITLE,
  themeColor: "#79d7c5",
};

export default async function MapPage() {
  const dreamAddress = island.dream?.address ?? "---- ---- ---- ---- ----";

  return (
    <PageLayout
      title={TITLE}
      navbarBgClass="bg-[#79d7c5]"
      mainBgClass="bg-[#79d7c5]"
    >
      <div className="mx-auto flex h-full max-w-xl flex-col items-center justify-center gap-y-9 px-5 pb-[calc(3.5rem+env(safe-area-inset-bottom))] pt-10 tracking-tight">
        <div className="relative px-6 py-2.5 text-xl/none font-bold text-dark-bronze-coin/75 before:absolute before:inset-0 before:[border-left:0.1875rem_solid_transparent] before:[border-right:0.1875rem_solid_transparent] before:[border-top:40px_solid_#faea4a] sm:text-[1.375rem]/none sm:before:[border-top:42px_solid_#faea4a] md:px-8 md:py-3 md:text-2xl/none md:before:[border-top:48px_solid_#faea4a]">
          <span className="relative">{island.name}</span>
        </div>
        <Image
          src={getImageURL("map", {
            width: 640,
            height: 535,
            x: 330,
            y: 100,
            crop: "crop",
          })}
          width={640}
          height={535}
          alt=""
          quality={85}
          priority
          className="mx-auto w-full"
        />

        <div className="mx-auto w-full max-w-sm border-b-2 border-dashed border-white/50 text-center text-[17px] font-bold text-[#23776c] sm:text-lg md:text-xl">
          {`Dream Address : ${dreamAddress}`}
        </div>
      </div>
    </PageLayout>
  );
}
