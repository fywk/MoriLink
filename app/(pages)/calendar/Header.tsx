"use client";

import { useEffect, useState } from "react";

import dayjs from "@/lib/utils/dayjs";

export default function Header() {
  const [now, setNow] = useState(dayjs());

  useEffect(() => {
    setInterval(() => {
      setNow(dayjs());
    }, 1000);
  }, []);

  return (
    <div className="flex items-end justify-between font-[750] tracking-tight text-beaver">
      <div className="flex items-center gap-x-1">
        <span className="rounded-full bg-beaver px-1.5 py-1 text-[13px]/none tracking-normal text-alabaster">
          {now.format("ddd.")}
        </span>
        <p className="text-[15px]/none">{now.format("D MMMM")}</p>
      </div>
      <div className="flex items-baseline gap-x-1">
        <p className="text-2xl/none">{now.format("h:mm")}</p>
        <p className="text-sm/none">{now.format("A")}</p>
      </div>
    </div>
  );
}
