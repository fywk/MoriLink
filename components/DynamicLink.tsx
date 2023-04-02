"use client";

import Link from "next/link";

import { useMusicContext } from "@/lib/hooks";
import { urlize } from "@/lib/utils";

export default function DynamicLink(props: {
  href: string;
  children: React.ReactNode;
}) {
  const { audioTitle } = useMusicContext();
  const href = audioTitle ? `${props.href}\#${urlize(audioTitle)}` : props.href;

  return <Link href={href}>{props.children}</Link>;
}
