"use client";

import { useEffect, useState } from "react";

import dayjs from "@/lib/utils/dayjs";

import type { Dayjs } from "dayjs";

export default function Header() {
  const [date, setDate] = useState<Dayjs>(() => dayjs());

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(dayjs());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex h-5 items-end justify-between font-[750] tracking-tight text-beaver">
      <div className="flex items-center gap-x-1">
        {date && (
          <span className="flex h-5 items-center justify-center rounded-full bg-beaver px-2 text-xs/none tracking-normal text-white">
            {date.format("ddd.")}
          </span>
        )}
        <p className="text-sm/none">{date?.format("D MMMM")}</p>
      </div>
      <div className="flex items-baseline gap-x-[3px]">
        <p className="text-xl/none">{date?.format("h:mm")}</p>
        <p className="text-xs/none">{date?.format("A")}</p>
      </div>
    </div>
  );
}
