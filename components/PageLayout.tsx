import clsx from "clsx";

import Navbar from "./Navbar";

type Props = {
  title: string;
  themeColor: string;
  mainBackground?: string;
  parentPage?: string;
  children: React.ReactNode;
};

export default function PageLayout({
  title,
  themeColor,
  mainBackground = "transparent",
  parentPage = "/",
  children,
}: Props) {
  return (
    <div
      className="relative grid h-full min-h-dvh grid-rows-[auto_1fr]"
      style={{
        ["--theme-color" as any]: themeColor,
        ["--main-background" as any]: mainBackground,
      }}
    >
      <Navbar title={title} parentPage={parentPage} />
      <main className={clsx("size-full [background:var(--main-background)]")} id="content">
        {children}
      </main>
    </div>
  );
}
