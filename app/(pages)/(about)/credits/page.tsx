import { Metadata } from "next";

import Logo from "@/components/Logo";
import PageLayout from "@/components/PageLayout";

const TITLE = "Credits";

export const metadata: Metadata = {
  title: TITLE,
  themeColor: "#dacca7",
};

export default function CreditsPage() {
  return (
    <PageLayout title={TITLE} navbarBgClass="bg-[#dacca7]" parentPage="/about">
      <div className="mx-auto flex max-w-xl flex-col justify-between px-5 pt-6 pb-12">
        <Logo size="md" />
      </div>
    </PageLayout>
  );
}
