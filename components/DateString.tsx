"use client";

import { useEffect, useState } from "react";

import { DATE_FORMAT_SHORT } from "@/lib/constants";
import dayjs from "@/lib/utils/dayjs";

export default function DateString() {
  const [date, setDate] = useState("");

  useEffect(() => {
    setDate(dayjs().format(DATE_FORMAT_SHORT));
  }, []);

  return <span className="place-self-end">{date}</span>;
}
