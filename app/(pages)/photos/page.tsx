import { Metadata } from "next";

import PageLayout from "@/components/PageLayout";

const TITLE = "Photos";

export const metadata: Metadata = {
  title: TITLE,
  themeColor: "#c4bced",
};

export default function PhotosPage() {
  return (
    <PageLayout
      title={TITLE}
      navbarBgClass="bg-[#c4bced]"
      bgClass="bg-[#d7d2f3]"
    >
      test
    </PageLayout>
  );
}
