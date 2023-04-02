import Navbar from "./Navbar";

type Props = {
  title: string;
  navbarBgClass: string;
  bgClass?: string;
  parentPage?: string;
  children: React.ReactNode;
};

export default function PageLayout({
  title,
  navbarBgClass,
  bgClass = "bg-alabaster",
  parentPage,
  children,
}: Props) {
  return (
    <>
      <Navbar title={title} bgClass={navbarBgClass} parentPage={parentPage} />
      <main className={bgClass} id="content">
        <div className="h-full w-full">{children}</div>
      </main>
    </>
  );
}
