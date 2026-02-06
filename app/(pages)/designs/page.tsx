import CustomDesignsFooter from "@/components/CustomDesignsFooter";
import CustomDesignsGrid from "@/components/CustomDesignsGrid";
import CustomDesingsTabs from "@/components/CustomDesignsTabs";
import PageLayout from "@/components/PageLayout";

import type { Metadata, Viewport } from "next";

const title = "Custom Designs";
const themeColor = "#fecad1";

export const metadata: Metadata = {
  title,
};

export const viewport: Viewport = {
  themeColor,
};

export default async function CustomDesignsPage() {
  return (
    <PageLayout title={title} themeColor={themeColor} bodyBackground={themeColor}>
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
