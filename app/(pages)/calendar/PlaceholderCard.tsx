import Image from "next/image";

import spriteTownIsland from "@/public/images/sprites/Town_Island.png";

export default function PlaceholderCard({ withText = false }) {
  return (
    <div className="@container relative flex min-h-34 items-center justify-center overflow-hidden rounded-xs bg-[#f0ecd7] leading-none font-bold tracking-tight text-beaver">
      {withText && <p>Developing...</p>}
      <Image
        src={spriteTownIsland}
        alt=""
        unoptimized
        className="absolute right-0.5 -bottom-4.5 size-13 brightness-0 invert"
        draggable={false}
      />
    </div>
  );
}
