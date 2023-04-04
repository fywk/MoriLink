import { Metadata } from "next";

import PageLayout from "@/components/PageLayout";

const TITLE = "Blog";

export const metadata: Metadata = {
  title: TITLE,
  themeColor: "#e6ec8d",
};

export default function BlogPage() {
  return (
    <PageLayout
      title={TITLE}
      navbarBgClass="bg-[#e6ec8d]"
      mainBgClass="bg-[#e6ec8d]"
    >
      test
    </PageLayout>
  );
}
