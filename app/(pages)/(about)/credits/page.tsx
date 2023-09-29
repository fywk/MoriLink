import Image from "next/image";

import PageLayout from "@/components/PageLayout";
import { app } from "@/lib/config";
import morilinkLogo from "@/public/images/MoriLink_Logo.svg";

import type { Metadata } from "next";

const title = "Credits";
const themeColor = "#dacca7";

export const metadata: Metadata = {
  title,
  themeColor,
};

export default function CreditsPage() {
  return (
    <PageLayout title={title} themeColor={themeColor} parentPage="/about">
      <div className="mx-auto flex max-w-xl flex-col justify-between px-5 pb-12 pt-6">
        <Image
          src={morilinkLogo}
          alt={`${app.title} logo`}
          className="-mx-1 w-48 py-8"
          draggable={false}
        />
      </div>
    </PageLayout>
  );
}
