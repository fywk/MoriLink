import Image from "next/image";

import PageLayout from "@/components/PageLayout";
import { island } from "@/lib/config";
import { DATE_FORMAT_MEDIUM, ID_PLACEHOLDER } from "@/lib/constants";
import dayjs from "@/lib/utils/dayjs";
import { generateImageURL, getLatestMap, getMapBackgroundColor } from "@/lib/utils/image";

import type { TransformationOptions } from "cloudinary";
import type { Metadata, Viewport } from "next";

const title = "Map";

const map = await getLatestMap();
const mapImageTransformations: TransformationOptions = {
  width: 640,
  height: 535,
  x: 330,
  y: 100,
  crop: "crop",
};
const mapImageURL = generateImageURL(map.public_id, mapImageTransformations, true);
const themeColor = await getMapBackgroundColor(mapImageURL);

export const metadata: Metadata = {
  title,
};

export const viewport: Viewport = {
  themeColor,
};

export default function MapPage() {
  const dreamAddress = island.dreamAddress ?? ID_PLACEHOLDER;
  const mapUpdateDate = dayjs(map.created_at).format(DATE_FORMAT_MEDIUM);

  return (
    <PageLayout title={title} themeColor={themeColor} mainBackground={themeColor}>
      <div className="mx-auto flex h-full max-w-xl flex-col items-center justify-center gap-y-9 px-5 pb-[calc(5rem+env(safe-area-inset-bottom))] pt-12 tracking-tight">
        <h2 className="relative px-6 py-2.5 text-xl/none font-bold text-dark-bronze-coin/75 before:absolute before:inset-0 before:[border-left:0.1875rem_solid_transparent] before:[border-right:0.1875rem_solid_transparent] before:[border-top:40px_solid_#faea4a] sm:text-[1.375rem]/none sm:before:[border-top:42px_solid_#faea4a] md:px-8 md:py-3 md:text-2xl/none md:before:[border-top:48px_solid_#faea4a]">
          <span className="relative">{island.name}</span>
        </h2>
        <Image
          src={mapImageURL}
          width={640}
          height={535}
          alt=""
          quality={85}
          priority
          className="mx-auto w-full"
          draggable={false}
        />
        <h3 className="mx-auto w-full max-w-sm border-b-2 border-dashed border-white/50 text-center text-[17px] font-bold text-[#23776c] sm:text-lg md:text-xl">
          {`Dream Address : ${dreamAddress}`}
        </h3>
      </div>
      <p className="mb-safe absolute inset-x-0 bottom-3.5 mx-auto w-max text-xs/none font-bold leading-none tracking-tight text-[#23776c] md:bottom-3 md:left-[unset] md:right-3 md:text-sm/none">
        {`Map updated on: ${mapUpdateDate}`}
      </p>
    </PageLayout>
  );
}
