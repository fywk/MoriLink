import clsx from "clsx";
import Image from "next/image";

type Props = {
  imgSrc: string;
  customClass?: string;
};

export default function VillagerAvatar({ imgSrc, customClass }: Props) {
  return (
    <div
      className={clsx("relative flex aspect-square items-center justify-center p-1", customClass)}
    >
      <div className="absolute h-full w-full rounded-full border-4 border-[#faf7da] bg-pearl"></div>
      <Image
        src={imgSrc}
        width={128}
        height={128}
        alt=""
        quality={100}
        draggable={false}
        className="z-10"
      />
    </div>
  );
}
