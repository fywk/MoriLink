import { Metadata } from "next";

import CustomDesignsFooter from "@/components/CustomDesignsFooter";
import CustomDesignsGrid from "@/components/CustomDesignsGrid";
import CustomDesingsTabs from "@/components/CustomDesignsTabs";
import PageLayout from "@/components/PageLayout";

const TITLE = "Custom Designs";

export const metadata: Metadata = {
  title: TITLE,
  themeColor: "#fecad1",
};

export default async function CustomDesignsPage() {
  return (
    <PageLayout title={TITLE} navbarBgClass="bg-[#fecad1]">
      <div className="flex h-full flex-col justify-between gap-y-16">
        <div className="mx-auto w-full max-w-2xl px-5 pt-8">
          <CustomDesingsTabs
            normalPanel={<CustomDesignsGrid category="normal" />}
            proPanel={<CustomDesignsGrid category="pro" />}
          />
        </div>
        <CustomDesignsFooter />
      </div>
    </PageLayout>
  );
}
