import villagers from "animal-crossing/lib/data/Villagers.json";

import VillagerAvatar from "@/components/VillagerAvatar";
import { island } from "@/lib/config";
import { DATE_FORMAT_SHORT } from "@/lib/constants";
import dayjs from "@/lib/utils/dayjs";

import EventCard from "./EventCard";

type Villager = (typeof villagers)[number];

export default function ResidentBirthdaysCard() {
  const sortedResidents = island.residents.current
    .map((currentResident) => villagers.find((villager) => villager.name === currentResident))
    .filter((villager): villager is Villager => villager !== undefined)
    .sort((a, b) => {
      const aDateParts = a.birthday.split("/");
      const bDateParts = b.birthday.split("/");
      const monthDiff = +aDateParts[0] - +bDateParts[0];
      return monthDiff === 0 ? +aDateParts[1] - +bDateParts[1] : monthDiff;
    });

  return (
    <EventCard
      title={`Birthday of ${island.name} Residents`}
      titleColors="text-rose-500/90 before:border-rose-500/75 after:border-rose-500/75"
      cardClasses="bg-rose-200/80 bg-[repeating-linear-gradient(315deg,transparent,transparent_14px,rgb(254,205,211)_14px,rgb(254,205,211)_24px)]"
    >
      <div className="grid grid-cols-4 justify-center gap-x-6 gap-y-4 tracking-tight md:grid-cols-5">
        {sortedResidents.map((resident) => (
          <div className="flex flex-col items-center gap-y-1" key={resident.name}>
            <VillagerAvatar src={resident.iconImage} extraClasses="max-w-[5rem]" />
            <h4 className="text-[13px]/none font-bold text-dark-bronze-coin">{resident.name}</h4>
            <h5 className="rounded-full bg-rose-500/75 px-2 py-1 text-xs/none font-bold text-white">
              {dayjs()
                .month(+resident.birthday.split("/")[0] - 1)
                .date(+resident.birthday.split("/")[1])
                .format(DATE_FORMAT_SHORT)}
            </h5>
          </div>
        ))}
      </div>
    </EventCard>
  );
}
