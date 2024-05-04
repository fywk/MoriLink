import Image from "next/image";
import { notFound } from "next/navigation";

import CustomDesignsFooter from "@/components/CustomDesignsFooter";
import PageLayout from "@/components/PageLayout";
import { patterns } from "@/lib/config";
import { generateImageURL, generatePatternThumbnailURL } from "@/lib/utils/image";

import type { Metadata, Viewport } from "next";

import type { Pattern } from "@/lib/types/miscellaneous";

type Props = {
  params: { id: string };
};

const themeColor = "#fecad1";

export const dynamicParams = false; // dynamic segments not included in generateStaticParams will return a 404

export const viewport: Viewport = {
  themeColor,
};

function getPattern(id: string): Pattern | undefined {
  return patterns.find((pattern) => pattern.id === id);
}

export function generateMetadata({ params }: Props): Metadata {
  const pattern = getPattern(params.id);

  if (!pattern) notFound();

  const metadata: Metadata = {
    title: pattern.name,
  };

  return metadata;
}

export function generateStaticParams() {
  return patterns.map((pattern) => ({
    id: pattern.id,
  }));
}

export default function PatternPage({ params }: Props) {
  const pattern = getPattern(params.id);

  if (!pattern) notFound();

  return (
    <PageLayout title="Custom Designs" themeColor={themeColor} parentPage="/designs">
      <div className="flex h-full flex-col justify-between gap-y-16">
        <div className="mx-auto flex max-w-2xl flex-col gap-y-6 px-5 pt-8">
          <div className="flex items-center justify-between gap-x-2.5">
            <div className="flex flex-col gap-y-2">
              <h2 className="text-[22px]/none font-[750] text-dark-bronze-coin">{pattern.name}</h2>
              <p className="font-[750] leading-none text-[#f36f7d]">{pattern.id}</p>
            </div>
            <div className="aspect-square size-14">
              <Image
                src={generatePatternThumbnailURL(`patterns/${pattern.id}`)}
                width={154}
                height={154}
                alt=""
                quality={95}
                loading="eager"
                className="bg-[var(--theme-color)]"
              />
            </div>
          </div>
          <Image
            src={generateImageURL(`patterns/${pattern.id}`)}
            width={1280}
            height={720}
            alt=""
            quality={85}
            priority
            className="rounded-2xl bg-[var(--theme-color)]"
          />
          {Array.isArray(pattern.pictures) &&
            pattern.pictures.length > 0 &&
            pattern.pictures.map((picture, index) => (
              <Image
                src={generateImageURL(`patterns/pictures/${picture}`)}
                width={1280}
                height={720}
                alt=""
                quality={85}
                className="rounded-2xl bg-[var(--theme-color)]"
                key={index}
              />
            ))}
        </div>
        <CustomDesignsFooter />
      </div>
    </PageLayout>
  );
}
