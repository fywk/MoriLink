import Image from "next/image";

import PageLayout from "@/components/PageLayout";
import { app, player } from "@/lib/config";
import packageJSON from "@/package.json";
import morilinkLogo from "@/public/images/MoriLink_Logo.svg";

import type { Metadata, Viewport } from "next";

const title = "About";
const themeColor = "#dacca7";

export const metadata: Metadata = {
  title,
};

export const viewport: Viewport = {
  themeColor,
};

// Remove the leading caret (^) and tilde (~) notations from the version string
function getCleanVersionNumber(packageVersion: string): string {
  return packageVersion.replace(/^[\^~]/, "");
}

export default function AboutPage() {
  const websiteLink = "https://fywk.dev";
  const githubProfileLink = "https://github.com/fywk";

  const { react, next } = packageJSON.dependencies;
  const reactVersion = getCleanVersionNumber(react);
  const nextjsVersion = getCleanVersionNumber(next);

  return (
    <PageLayout title={title} themeColor={themeColor}>
      <div className="mx-auto grid h-full max-w-xl grid-rows-[auto_1fr] gap-y-6 px-5 py-12">
        <div className="flex flex-col items-center gap-y-3">
          <Image src={morilinkLogo} alt={`${app.name} logo`} width={208} draggable={false} />
          <div className="max-w-md text-center text-sm font-bold text-pretty text-beaver">
            {app.description}
          </div>
        </div>
        <div className="flex flex-col justify-between">
          <div className="flex flex-col divide-y-2 divide-dashed divide-bone">
            <a
              href={websiteLink}
              className="px-2.25 py-3.5 text-lg font-bold text-dark-bronze-coin hover:bg-[#ece5d4] active:bg-[#ece5d4]"
              target="_blank"
            >
              My website
            </a>
            <a
              href={githubProfileLink}
              className="px-2.25 py-3.5 text-lg font-bold text-dark-bronze-coin hover:bg-[#ece5d4] active:bg-[#ece5d4]"
              target="_blank"
            >
              Find me on GitHub
            </a>
            <a
              href={`${githubProfileLink}/${app.name}`}
              className="px-2.25 py-3.5 text-lg font-bold text-dark-bronze-coin hover:bg-[#ece5d4] active:bg-[#ece5d4]"
              target="_blank"
            >
              Source code
            </a>
          </div>
          <div className="flex flex-col gap-y-1.5 text-center text-xs/none font-[650] text-beaver">
            <p>{`Made with ♥ by ${player.name}.`}</p>
            <p>{`Built with Next.js v${nextjsVersion} on React ${reactVersion}.`}</p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
