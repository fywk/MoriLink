import clsx from "clsx";

import PageLayout from "@/components/PageLayout";

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
      <div className="mx-auto grid max-w-xl grid-cols-1 px-3 pb-[calc(3.5rem-env(safe-area-inset-bottom))] pt-4">
        <Header />
        <Divider axis="Y" />
        <div className="flex flex-col">
          <Section title="🎉 Seasonal Announcements">
            <div className="grid grid-cols-[1fr_auto_1fr]">
              <PlaceholderCard />
              <Divider axis="X" />
              <ZodiacSeasonCard />
            </div>
          </Section>
          <Divider axis="Y" />
          <Section title="🎂 Birthdays">
            <ResidentBirthdaysCard />
          </Section>
        </div>
      </div>
    </PageLayout>
  );
}

function Divider({ axis }: { axis: "X" | "Y" }) {
  return <div className={clsx("bg-[#ddd1b2]", axis === "X" ? "mx-2 w-0.5" : "my-2 h-0.5")}></div>;
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="flex flex-col gap-y-2">
      <h2 className="rounded-sm bg-[#e7ddc6] px-1.5 py-[7px] font-bold leading-none tracking-tight text-[#4d3906]">
        {title}
      </h2>
      {children}
    </section>
  );
}
