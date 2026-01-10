import { IconChevronLeft } from "@tabler/icons-react";
import Link from "next/link";

type Props = {
  title: string;
  parentPage: string;
};

export default function Navbar({ title, parentPage }: Props) {
  return (
    <div className="sticky top-0 z-40 flex items-center justify-between bg-(--theme-color) py-3 pr-[max(0.75rem,env(safe-area-inset-right))] pl-[max(0.75rem,env(safe-area-inset-left))] lg:px-4">
      <Link
        href={parentPage}
        className="flex size-8 basis-8 items-center justify-center rounded-full bg-alabaster text-beaver ring-tiffany-blue focus:outline-hidden focus-visible:ring-3"
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
