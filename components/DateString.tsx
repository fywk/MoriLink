"use client";

import dayjs from "@/lib/utils/dayjs";

export default function DateString({ format }: { format: string }) {
  return dayjs().format(format);
}
