import Image from "next/image";
import Link from "next/link";

import PageLayout from "@/components/PageLayout";
import { generateImageURL, getGalleryImages } from "@/lib/utils/image";

import type { Metadata } from "next";

const title = "Gallery";
const themeColor = "#fecad1";

export const metadata: Metadata = {
  title,
  themeColor,
};

export default async function GalleryPage() {
  const images = await getGalleryImages();

  return (
    <PageLayout title={title} themeColor={themeColor}>
      <div className="mx-auto mb-[env(safe-area-inset-bottom)] grid max-w-5xl grid-cols-3 gap-3 py-4 pl-[calc(1rem+env(safe-area-inset-left))] pr-[calc(1rem+env(safe-area-inset-right))] md:grid-cols-4 md:gap-3.5">
        {images.map((image, index) => (
          <Link
            href={`/gallery/${image.filename}`}
            className="aspect-square h-full w-full rounded sm:aspect-video"
            key={image.filename}
          >
            <Image
              src={generateImageURL(image.public_id, undefined, true)}
              width={image.width}
              height={image.height}
              alt=""
              placeholder="blur"
              blurDataURL={image.blurDataURL}
              loading={index < 3 ? "eager" : "lazy"}
              className="h-full w-full rounded object-cover"
            />
          </Link>
        ))}
      </div>
    </PageLayout>
  );
}
