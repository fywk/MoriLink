import { Metadata } from "next";
import Link from "next/link";

import PageLayout from "@/components/PageLayout";

const TITLE = "About";

export const metadata: Metadata = {
  title: TITLE,
  themeColor: "#dacca7",
};

export default function AboutPage() {
  return (
    <PageLayout title={TITLE} navbarBgClass="bg-[#dacca7]">
      <div className="mx-auto flex h-full max-w-xl flex-col justify-between px-5 pt-6 pb-12">
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
            href="https://github.com/fywk"
            className="px-[9px] py-3.5 text-lg font-bold text-dark-bronze-coin hover:bg-[#ece5d4] active:bg-[#ece5d4]"
            target="_blank"
          >
            Source code
          </a>
        </div>
        <div className="text-center text-xs/none font-bold text-beaver">
          {"Made with ♥ by "}
          <a href="https://github.com/fywk">{"@fywk"}</a>
        </div>
      </div>
    </PageLayout>
  );
}
