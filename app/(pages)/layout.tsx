export default function PagesRootLayout({ children }: { children: React.ReactNode }) {
  return <div className="relative grid h-full min-h-[100dvh] grid-rows-[auto_1fr]">{children}</div>;
}
