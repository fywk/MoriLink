import { DATE_FORMAT_SHORT } from "@/lib/constants";
import dayjs from "@/lib/utils/dayjs";

import VillagerAvatar from "./VillagerAvatar";

import type { Villager } from "@/lib/utils/villagers";

export default function VillagerModalContent({ villager }: { villager: Villager }) {
  // Convert birthday string in the format of mm/dd to dd/mm
  const birth = villager.birthday.split("/");
  const birthday = dayjs()
    .month(+birth[0] - 1)
    .date(+birth[1])
    .format(DATE_FORMAT_SHORT);

  return (
    <div className="flex flex-col items-center justify-center gap-y-3 tracking-tight">
      <VillagerAvatar src={villager.iconImage} extraClasses="max-w-[7.5rem]" />
      <h1>
        <a
          href={`https://nookipedia.com/wiki/${villager.name}`}
          className="text-[22px] font-bold text-dark-bronze-coin decoration-dotted underline-offset-4 ring-tiffany-blue hover:underline focus:outline-none focus-visible:ring-3"
          title={`Nookipedia: ${villager.name}`}
          target="_blank"
        >
          {villager.name}
        </a>
      </h1>
      <div className="grid w-full max-w-sm grid-cols-3 divide-x-4 divide-alabaster overflow-hidden rounded-xl text-center text-[15px]">
        <div className="flex flex-col divide-y-4 divide-alabaster font-bold">
          <div className="bg-pearl py-0.5 text-beaver">Species</div>
          <div className="bg-pearl/[.35] py-0.5 text-dark-bronze-coin">{villager.species}</div>
        </div>
        <div className="flex flex-col divide-y-4 divide-alabaster font-bold">
          <div className="bg-pearl py-0.5 text-beaver">Personality</div>
          <div className="bg-pearl/[.35] py-0.5 text-dark-bronze-coin">{villager.personality}</div>
        </div>
        <div className="flex flex-col divide-y-4 divide-alabaster font-bold">
          <div className="bg-pearl py-0.5 text-beaver">Birthday</div>
          <div className="bg-pearl/[.35] py-0.5 text-dark-bronze-coin">{birthday}</div>
        </div>
      </div>
    </div>
  );
}
