"use client";

import { usePathname } from "next/navigation";

type Props = {
  modal: React.ReactNode;
  children: React.ReactNode;
};

export default function PassportLayout({ modal, children }: Props) {
  const pathname = usePathname();
  const shouldShowModal = pathname !== null && pathname.includes("/resident/");

  return (
    <>
      {children}
      {shouldShowModal && modal}
    </>
  );
}
