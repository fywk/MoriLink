import Image from "next/image";
import Link from "next/link";

import { patterns } from "@/lib/config";
import { generatePatternThumbnailURL } from "@/lib/utils/image";

import type { Pattern } from "@/lib/types/miscellaneous";

type Props = {
  category: Pattern["category"];
};

const minimumEmptySlots = 28;

export default function PatternsGrid({ category }: Props) {
  // Filtering patterns array to include only objects that have a same category to the category prop
  const filteredPatterns: Pattern[] = patterns.filter((pattern) => pattern.category === category);

  // Calculate the number of placeholder slots to be filled
  const patternCount = filteredPatterns.length;
  const placeholderCount =
    patternCount > minimumEmptySlots
      ? minimumEmptySlots * Math.ceil(patternCount / minimumEmptySlots) - patternCount
      : minimumEmptySlots - patternCount;

  return (
    <div className="grid grid-cols-4 gap-4 md:grid-cols-7">
      {filteredPatterns.map((pattern, index) => (
        <Link
          href={`/designs/${pattern.id}`}
          className="relative flex aspect-square size-full items-center justify-center rounded-[1px] ring-tiffany-blue transition-transform hover:scale-105 focus:outline-none focus-visible:scale-105 focus-visible:ring-4"
          title={pattern.name}
          key={pattern.id}
        >
          <div className="aspect-square size-5.5 rounded-full bg-bone"></div>
          <Image
            src={generatePatternThumbnailURL(`patterns/${pattern.id}`)}
            width={154}
            height={154}
            alt=""
            quality={95}
            loading={index + 1 > 5 ? "lazy" : "eager"}
            className="absolute"
            draggable={false}
          />
        </Link>
      ))}
      {[...Array<undefined>(placeholderCount)].map((_, i) => (
        <div className="flex aspect-square size-full items-center justify-center" key={i}>
          <div className="aspect-square size-5.5 rounded-full bg-bone"></div>
        </div>
      ))}
    </div>
  );
}
