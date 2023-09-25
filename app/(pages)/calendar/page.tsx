import clsx from "clsx";

import GiftIcon from "@/components/icons/heroicons/GiftIcon";
import MegaphoneIcon from "@/components/icons/heroicons/MegaphoneIcon";
import PageLayout from "@/components/PageLayout";

import CurrentSeasonCard from "./CurrentSeasonCard";
import Header from "./Header";
import PlaceholderCard from "./PlaceholderCard";
import ResidentBirthdaysCard from "./ResidentBirthdaysCard";
import ZodiacSeasonCard from "./ZodiacSeasonCard";

import type { Metadata } from "next";

const title = "Calendar";
const themeColor = "#fce496";

export const metadata: Metadata = {
  title,
  themeColor,
};

export default function CalendarPage() {
  return (
    <PageLayout title={title} themeColor={themeColor} mainBackground="#fdfdf5">
      <div className="mx-auto flex max-w-xl flex-col gap-y-2.5 px-3 pb-[calc(5rem+env(safe-area-inset-bottom))] pt-[15px]">
        <Header />
        <div className="flex flex-col gap-y-1.5">
          <Section
            title="Seasonal Announcements"
            icon={<MegaphoneIcon className="h-4 w-4 -rotate-12" />}
          >
            <div className="grid grid-cols-[1fr_auto_1fr]">
              <CurrentSeasonCard />
              <Divider axis="X" />
              <ZodiacSeasonCard />
            </div>
            <Divider axis="Y" />
            <PlaceholderCard withText />
          </Section>
          <Divider axis="Y" />
          <Section title="Birthdays" icon={<GiftIcon className="h-4 w-4" />}>
            <ResidentBirthdaysCard />
          </Section>
        </div>
      </div>
    </PageLayout>
  );
}

function Divider({ axis }: { axis: "X" | "Y" }) {
  return (
    <div className={clsx("bg-[#ddd1b2]", axis === "X" ? "mx-1.5 w-0.5" : "my-1.5 h-0.5")}></div>
  );
}

function Section({
  title,
  icon,
  children,
}: {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <section className="group flex flex-col gap-y-2">
      <h2 className="flex items-end gap-x-1 rounded-sm bg-[#e7ddc6] px-1.5 py-[7px] text-[15px]/none font-bold tracking-tight text-[#4d3906] group-first:text-base/none">
        {icon}
        {title}
      </h2>
      <div>{children}</div>
    </section>
  );
}
