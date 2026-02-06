import "./globals.css";

import { Nunito } from "next/font/google";

import MusicProvider from "@/components/MusicProvider";
import { app } from "@/lib/config";

import type { Metadata, Viewport } from "next";

const nunito = Nunito({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: app.name,
    template: `%s - ${app.name}`,
  },
  description: app.description,
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={nunito.className}>
      <MusicProvider>{children}</MusicProvider>
    </html>
  );
}
