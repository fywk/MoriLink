"use client";

export default function DateString() {
  const now = new Date();

  return <>{`${now.getDate()}/${now.getMonth() + 1}`}</>;
}
