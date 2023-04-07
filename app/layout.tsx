import "./globals.css";

import clsx from "clsx";
import { Metadata } from "next";
import { Nunito } from "next/font/google";

import { site } from "@/lib/site";

import MusicProvider from "./music-provider";

const nunito = Nunito({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: site.title,
    template: `%s - ${site.title}`,
  },
  description: site.description,
  viewport: {
    width: "device-width",
    initialScale: 1,
    viewportFit: "cover",
  },
  icons: {
    icon: "/favicon.svg",
  },
  manifest: "/site.webmanifest",
  themeColor: site.themeColor,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={clsx(nunito.className, "bg-alabaster")}>
      <body>
        <MusicProvider>{children}</MusicProvider>
      </body>
    </html>
  );
}
