import Link from "next/link";

import PageLayout from "@/components/PageLayout";
import { app } from "@/lib/config";

import type { Metadata, Viewport } from "next";

const title = "About";
const themeColor = "#dacca7";

export const metadata: Metadata = {
  title,
};

export const viewport: Viewport = {
  themeColor,
};

export default function AboutPage() {
  const githubProfileLink = "https://github.com/fywk";

  return (
    <PageLayout title={title} themeColor={themeColor}>
      <div className="mx-auto flex h-full max-w-xl flex-col justify-between px-5 pt-6 pb-12">
        <div className="flex flex-col divide-y-2 divide-dashed divide-bone">
          <Link
            href="/copyrights"
            className="px-2.25 py-3.5 text-lg font-bold text-dark-bronze-coin hover:bg-[#ece5d4] active:bg-[#ece5d4]"
          >
            Copyright
          </Link>
          <Link
            href="/credits"
            className="px-2.25 py-3.5 text-lg font-bold text-dark-bronze-coin hover:bg-[#ece5d4] active:bg-[#ece5d4]"
          >
            Credits
          </Link>
          <a
            href={`${githubProfileLink}/${app.name}`}
            className="px-2.25 py-3.5 text-lg font-bold text-dark-bronze-coin hover:bg-[#ece5d4] active:bg-[#ece5d4]"
            target="_blank"
          >
            Source code
          </a>
        </div>
        <div className="text-center text-[13px]/none font-bold text-beaver">
          {"Made with ♥ by "}
          <a href={githubProfileLink} className="underline">
            {"@fywk"}
          </a>
        </div>
      </div>
    </PageLayout>
  );
}
