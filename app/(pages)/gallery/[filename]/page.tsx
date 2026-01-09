import Image from "next/image";
import { notFound } from "next/navigation";

import PageLayout from "@/components/PageLayout";
import { DATE_FORMAT_FULL } from "@/lib/constants";
import dayjs from "@/lib/utils/dayjs";
import { generateImageURL, getGalleryImages } from "@/lib/utils/image";

import type { Metadata, Viewport } from "next";

type Props = {
  params: Promise<{ filename: string }>;
};

const title = "Gallery";
const themeColor = "#ffd0ae";

export const metadata: Metadata = {
  title,
};

export const viewport: Viewport = {
  themeColor,
};

export async function generateStaticParams() {
  const images = await getGalleryImages();

  return images.map((image) => ({
    filename: image.filename,
  }));
}

export default async function GalleryImagePage(props: Props) {
  const params = await props.params;
  const images = await getGalleryImages();
  const image = images.find((image) => image.filename === params.filename);

  if (!image) notFound();

  // Match the image filename in the format of `YYYYMMDD_HHMMSS` against the pattern `YYYYMMDD`
  const ymd = image.filename.match(/(....)(..)(..)/)!; // returns ["YYYYMMDD", "YYYY", "MM", "DD"]
  const imageTakenDate = dayjs()
    .year(+ymd[1])
    .month(+ymd[2] - 1)
    .date(+ymd[3])
    .format(DATE_FORMAT_FULL);

  return (
    <PageLayout title={title} themeColor={themeColor} parentPage="/gallery">
      <div className="mb-safe flex h-full items-center justify-center p-4">
        <figure className="space-y-2">
          <Image
            src={generateImageURL(image.public_id, undefined, true)}
            width={image.width}
            height={image.height}
            alt=""
            placeholder="blur"
            blurDataURL={image.blurDataURL}
            priority
            className="size-full rounded object-cover"
          />
          <figcaption className="flex items-center gap-x-0.5 text-sm font-medium tracking-tight text-beaver">
            {imageTakenDate}
          </figcaption>
        </figure>
      </div>
    </PageLayout>
  );
}
