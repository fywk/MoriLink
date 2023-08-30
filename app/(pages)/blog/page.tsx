import PageLayout from "@/components/PageLayout";

import type { Metadata } from "next";

const title = "Blog";

export const metadata: Metadata = {
  title,
  themeColor: "#e6ec8d",
};

export default function BlogPage() {
  return (
    <PageLayout title={title} navbarBgClass="bg-[#e6ec8d]" mainBgClass="bg-[#e6ec8d]">
      test
    </PageLayout>
  );
}
