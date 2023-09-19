"use client";

import { useEffect, useState } from "react";

import dayjs from "@/lib/utils/dayjs";

export default function DateString({ format }: { format: string }) {
  const [date, setDate] = useState("");

  useEffect(() => {
    setDate(dayjs().format(format));
  }, [format]);

  return date;
}
