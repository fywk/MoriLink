import { Metadata } from "next";

import PageLayout from "@/components/PageLayout";

const TITLE = "Photos";

export const metadata: Metadata = {
  title: TITLE,
  themeColor: "#ffd0ae",
};

export default function PhotosPage() {
  return (
    <PageLayout title={TITLE} navbarBgClass="bg-[#ffd0ae]">
      test
    </PageLayout>
  );
}
