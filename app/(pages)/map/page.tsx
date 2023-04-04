import { Metadata } from "next";
import Image from "next/image";

import PageLayout from "@/components/PageLayout";
import { island } from "@/lib/config";
import island_map from "@/public/images/map.jpg";

const TITLE = "Map";

export const metadata: Metadata = {
  title: TITLE,
  themeColor: "#79d7c5",
};

export default async function MapPage() {
  return (
    <PageLayout
      title={TITLE}
      navbarBgClass="bg-[#79d7c5]"
      mainBgClass="bg-[#79d7c5]"
    >
      <div className="mx-auto flex h-full max-w-2xl flex-col items-center justify-center gap-y-9 px-5 py-10 tracking-tight">
        <div className="rounded-sm bg-[#faea4a] px-5 py-2.5 text-xl/none font-bold text-dark-bronze-coin/75 shadow-md sm:text-[1.375rem]/none md:px-6 md:py-3 md:text-2xl/none">
          {island.name}
        </div>
        <Image
          src={island_map}
          alt=""
          quality={100}
          priority
          draggable={false}
          className="mx-auto w-full"
        />

        <div className="font-bold text-[#23776c] sm:text-lg md:text-xl">{`Dream Address : ${
          island.dream?.address ?? "---- ---- ---- ---- ----"
        }`}</div>
      </div>
    </PageLayout>
  );
}
