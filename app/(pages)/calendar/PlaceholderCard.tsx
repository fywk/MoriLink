import Image from "next/image";

import spriteTownIsland from "@/public/images/sprites/Town_Island.png";

export default function PlaceholderCard() {
  return (
    <div className="relative flex items-center justify-center overflow-hidden rounded-sm bg-[#f0ecd7] font-bold leading-none tracking-tight text-beaver @container">
      <p className="hidden @[200px]:block">Developing...</p>
      <Image
        src={spriteTownIsland}
        alt=""
        unoptimized
        className="absolute -bottom-4.5 right-0.5 h-[3.25rem] w-[3.25rem] mix-blend-plus-lighter"
        draggable={false}
      />
    </div>
  );
}
