import Image from "next/image";
import { notFound } from "next/navigation";

import GalleryModal from "@/components/GalleryModal";
import { getImageURL } from "@/lib/utils/cloudinary";
import { getGalleryImages } from "@/lib/utils/getGalleryImages";

type Props = {
  params: { filename: string };
};

export default async function GalleryImageModal({ params }: Props) {
  const images = await getGalleryImages();
  const image =
    params.filename &&
    images.find((image) => image.filename === params.filename);

  if (!image) notFound();

  return (
    <GalleryModal>
      <figure>
        <Image
          src={getImageURL(image.public_id, undefined, true)}
          width={image.width}
          height={image.height}
          alt=""
          placeholder="blur"
          blurDataURL={image.blurDataURL}
          priority
          className="h-full w-full rounded object-scale-down"
        />
      </figure>
    </GalleryModal>
  );
}
