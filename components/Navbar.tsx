import clsx from "clsx";
import Link from "next/link";

import { IconChevronLeft } from "@tabler/icons-react";

type Props = {
  title: string;
  bgClass: React.HTMLProps<HTMLElement>["className"];
  parentPage?: string;
};

export default function Navbar({ title, bgClass, parentPage = "/" }: Props) {
  return (
    <div
      className={clsx(
        "sticky top-0 z-40 flex items-center justify-between py-3 pl-[max(0.75rem,env(safe-area-inset-left))] pr-[max(0.75rem,env(safe-area-inset-right))] lg:px-4",
        bgClass
      )}
    >
      <Link
        href={parentPage}
        className="flex h-8 w-8 basis-8 items-center justify-center rounded-full bg-alabaster text-beaver ring-tiffany-blue focus:outline-none focus-visible:ring-3"
        title="Back"
      >
        <IconChevronLeft size={20} strokeWidth={2.75} />
      </Link>
      <h1 className="text-center text-lg/none font-bold tracking-tight text-dark-bronze-coin">
        {title}
      </h1>
      <div className="basis-8"></div>
    </div>
  );
}
