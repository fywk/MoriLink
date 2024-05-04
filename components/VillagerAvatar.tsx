import clsx from "clsx";
import Image from "next/image";

type Props = {
  src: string;
  extraClasses?: string;
};

export default function VillagerAvatar({ src, extraClasses }: Props) {
  return (
    <div
      className={clsx("relative flex aspect-square items-center justify-center p-1", extraClasses)}
    >
      <div className="absolute size-full rounded-full border-4 border-[#faf7da] bg-pearl"></div>
      <Image
        src={src}
        width={128}
        height={128}
        alt=""
        quality={100}
        className="z-10"
        draggable={false}
      />
    </div>
  );
}
