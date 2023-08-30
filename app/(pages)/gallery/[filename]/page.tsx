import Image from "next/image";
import { notFound } from "next/navigation";

import PageLayout from "@/components/PageLayout";
import { getImageURL } from "@/lib/providers/cloudinary";
import { getGalleryImages } from "@/lib/utils/image";

import type { Metadata } from "next";

type Props = {
  params: { filename: string };
};

const title = "Gallery";

export const metadata: Metadata = {
  title,
  themeColor: "#ffd0ae",
};

export async function generateStaticParams() {
  const images = await getGalleryImages();

  return images.map((image) => ({
    filename: image.filename,
  }));
}

export default async function GalleryImagePage({ params }: Props) {
  const images = await getGalleryImages();
  const image = images.find((image) => image.filename === params.filename);

  if (!image) notFound();

  const ymd = image.filename.split("-")[0].match(/(....)(..)(..)/)!;
  const imageTakenDate = new Date(+ymd[1], +ymd[2] - 1, +ymd[3]).toLocaleDateString("en-GB", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <PageLayout title={title} navbarBgClass="bg-[#ffd0ae]" parentPage="/gallery">
      <div className="mb-[env(safe-area-inset-bottom)] flex h-full items-center justify-center p-4">
        <figure className="space-y-2">
          <Image
            src={getImageURL(image.public_id, undefined, true)}
            width={image.width}
            height={image.height}
            alt=""
            placeholder="blur"
            blurDataURL={image.blurDataURL}
            priority
            className="h-full w-full rounded object-cover"
          />
          <figcaption className="flex items-center gap-x-0.5 text-sm font-medium tracking-tight text-beaver">
            {imageTakenDate}
          </figcaption>
        </figure>
      </div>
    </PageLayout>
  );
}
