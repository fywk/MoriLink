export default function Tooltips({ children }: { children: React.ReactNode }) {
  return (
    <tool-tip
      inert
      role="tooltip"
      className="pointer-events-none absolute -top-5 left-1/2 z-30 mx-auto w-max translate-x-[calc(50%*-1)] rounded-full bg-tiffany-blue/90 px-3 py-2.5 leading-none font-bold whitespace-nowrap text-white opacity-0 transition-opacity select-none group-hover:opacity-100 group-hover:delay-200 group-focus-visible:opacity-100"
    >
      {children}
    </tool-tip>
  );
}
