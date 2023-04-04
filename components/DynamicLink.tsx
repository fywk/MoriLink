"use client";

import Link from "next/link";

import { useMusicContext } from "@/lib/hooks";
import { urlize } from "@/lib/utils";

export default function DynamicLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const { audioTitle } = useMusicContext();
  const url =
    audioTitle && href === "/Music" ? `${href}\#${urlize(audioTitle)}` : href;

  return <Link href={url}>{children}</Link>;
}
