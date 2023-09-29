import "./globals.css";

import clsx from "clsx";
import { Nunito } from "next/font/google";

import MusicProvider from "@/components/MusicProvider";
import { app } from "@/lib/config";

import type { Metadata } from "next";

const nunito = Nunito({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: app.name,
    template: `%s - ${app.name}`,
  },
  description: app.description,
  viewport: {
    width: "device-width",
    initialScale: 1,
    viewportFit: "cover",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  themeColor: app.themeColor,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={clsx(nunito.className, "bg-alabaster")}>
      <body>
        <MusicProvider>{children}</MusicProvider>
      </body>
    </html>
  );
}
