import PageLayout from "@/components/PageLayout";

import type { Metadata } from "next";

const TITLE = "Gallery";

export const metadata: Metadata = {
  title: TITLE,
  themeColor: "#ffd0ae",
};

export default function GalleryPage() {
  return (
    <PageLayout title={TITLE} navbarBgClass="bg-[#ffd0ae]">
      test
    </PageLayout>
  );
}
