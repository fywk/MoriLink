import Image from "next/image";
import Link from "next/link";

import patterns from "@/data/patterns.json";

type Props = {
  category: "normal" | "pro";
};

const MINIMUM_EMPTY_SLOTS = 28;

export default function PatternsGrid({ category }: Props) {
  // Filtering patterns array to include only objects that have a same category to the category prop
  const filteredPatterns = patterns.filter((obj) => obj.category === category);

  return (
    <div className="grid grid-cols-4 gap-4 md:grid-cols-7">
      {filteredPatterns.map((pattern, index) => (
        <Link
          href={`/designs/${pattern.id}`}
          className="flex aspect-square h-full w-full items-center justify-center rounded-[1px] ring-tiffany-blue transition-transform hover:scale-105 focus:outline-none focus-visible:scale-105 focus-visible:ring-4"
          title={pattern.name}
          key={pattern.id}
        >
          <Image
            src={`/images/patterns/${pattern.id}/thumbnail.jpg`}
            width={154}
            height={154}
            alt=""
            quality={100}
            loading={index + 1 > 5 ? "lazy" : "eager"}
            draggable={false}
          />
        </Link>
      ))}
      {[...Array(MINIMUM_EMPTY_SLOTS - filteredPatterns.length)].map((_, i) => (
        <div
          className="flex aspect-square h-full w-full items-center justify-center"
          key={i}
        >
          <div className="aspect-square h-5.5 w-5.5 rounded-full bg-bone"></div>
        </div>
      ))}
    </div>
  );
}
