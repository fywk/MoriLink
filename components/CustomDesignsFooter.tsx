import { player } from "@/lib/config";

export default function CustomDesignsFooter() {
  return (
    <div className="h-[calc(3.5rem+env(safe-area-inset-bottom))] bg-(--theme-color)">
      <div className="relative mx-auto max-w-2xl px-5">
        <div className="absolute -top-7.5 w-fit space-y-1.5 rounded-2xl bg-pearl py-2.5 pr-12 pl-4">
          <h2 className="leading-none font-[750] text-dark-bronze-coin">{player.name}</h2>
          <p className="text-[15px]/none font-[750] text-[#f36f7d]">{player.creatorID}</p>
        </div>
      </div>
    </div>
  );
}
