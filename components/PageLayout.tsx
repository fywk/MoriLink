import clsx from "clsx";

import Navbar from "./Navbar";

type Props = {
  title: string;
  navbarBgClass: React.HTMLProps<HTMLElement>["className"];
  mainBgClass?: React.HTMLProps<HTMLElement>["className"];
  parentPage?: string;
  children: React.ReactNode;
};

export default function PageLayout({
  title,
  navbarBgClass,
  mainBgClass = "bg-alabaster",
  parentPage,
  children,
}: Props) {
  return (
    <>
      <Navbar title={title} bgClass={navbarBgClass} parentPage={parentPage} />
      <main className={clsx("h-full w-full", mainBgClass)} id="content">
        {children}
      </main>
    </>
  );
}
