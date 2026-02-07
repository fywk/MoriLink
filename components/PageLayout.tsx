import clsx from "clsx";

import Navbar from "./Navbar";

type Props = {
  title: string;
  themeColor: string;
  bodyBackground?: string;
  mainBackground?: string;
  parentPage?: string;
  children: React.ReactNode;
};

export default function PageLayout({
  title,
  themeColor,
  bodyBackground = "#f4f1e3", // bg-alabaster
  mainBackground = "#f4f1e3", // bg-alabaster
  parentPage = "/",
  children,
}: Props) {
  return (
    <body style={{ backgroundColor: bodyBackground }}>
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
    </body>
  );
}
