"use client";

import { useEffect, useState } from "react";

export default function DateString() {
  const [date, setDate] = useState("");

  useEffect(() => {
    const now = new Date();
    setDate(`${now.getDate()}/${now.getMonth() + 1}`);
  }, []);

  return <span className="place-self-end">{date}</span>;
}
