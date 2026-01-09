import Image from "next/image";

import PageLayout from "@/components/PageLayout";
import { app } from "@/lib/config";
import morilinkLogo from "@/public/images/MoriLink_Logo.svg";

import type { Metadata, Viewport } from "next";

const title = "Credits";
const themeColor = "#dacca7";

export const metadata: Metadata = {
  title,
};

export const viewport: Viewport = {
  themeColor,
};

export default function CreditsPage() {
  return (
    <PageLayout title={title} themeColor={themeColor} parentPage="/about">
      <div className="mx-auto flex max-w-xl flex-col justify-between px-5 pt-6 pb-12">
        <Image
          src={morilinkLogo}
          alt={`${app.name} logo`}
          className="-mx-1 w-48 py-8"
          draggable={false}
        />
      </div>
    </PageLayout>
  );
}
