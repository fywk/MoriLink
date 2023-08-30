import Logo from "@/components/Logo";
import PageLayout from "@/components/PageLayout";

import type { Metadata } from "next";

const title = "Credits";

export const metadata: Metadata = {
  title,
  themeColor: "#dacca7",
};

export default function CreditsPage() {
  return (
    <PageLayout title={title} navbarBgClass="bg-[#dacca7]" parentPage="/about">
      <div className="mx-auto flex max-w-xl flex-col justify-between px-5 pb-12 pt-6">
        <Logo size="md" />
      </div>
    </PageLayout>
  );
}
