import Link from "next/link";

import PageLayout from "@/components/PageLayout";

import type { Metadata } from "next";

const title = "About";

export const metadata: Metadata = {
  title,
  themeColor: "#dacca7",
};

export default function AboutPage() {
  const githubProfileLink = "https://github.com/fywk";

  return (
    <PageLayout title={title} navbarBgClass="bg-[#dacca7]">
      <div className="mx-auto flex h-full max-w-xl flex-col justify-between px-5 pb-12 pt-6">
        <div className="flex flex-col divide-y-2 divide-dashed divide-bone">
          <Link
            href="/copyrights"
            className="px-[9px] py-3.5 text-lg font-bold text-dark-bronze-coin hover:bg-[#ece5d4] active:bg-[#ece5d4]"
          >
            Copyright
          </Link>
          <Link
            href="/credits"
            className="px-[9px] py-3.5 text-lg font-bold text-dark-bronze-coin hover:bg-[#ece5d4] active:bg-[#ece5d4]"
          >
            Credits
          </Link>
          <a
            href={`${githubProfileLink}/NookPlusPlus`}
            className="px-[9px] py-3.5 text-lg font-bold text-dark-bronze-coin hover:bg-[#ece5d4] active:bg-[#ece5d4]"
            target="_blank"
          >
            Source code
          </a>
        </div>
        <div className="text-center text-xs/none font-bold text-beaver">
          {"Made with ♥ by "}
          <a href={githubProfileLink}>{"@fywk"}</a>
        </div>
      </div>
    </PageLayout>
  );
}
