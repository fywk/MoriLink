import PageLayout from "@/components/PageLayout";

import type { Metadata } from "next";

const title = "Blog";
const themeColor = "#e6ec8d";

export const metadata: Metadata = {
  title,
  themeColor,
};

export default function BlogPage() {
  return (
    <PageLayout title={title} themeColor={themeColor} mainBackground={themeColor}>
      test
    </PageLayout>
  );
}
