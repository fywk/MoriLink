import { player } from "@/lib/config";

export default function CustomDesignsFooter() {
  return (
    <div className="h-[calc(3.5rem+env(safe-area-inset-bottom))] bg-[#fecad1]">
      <div className="relative mx-auto max-w-2xl px-5">
        <div className="absolute -top-7.5 w-fit space-y-1.5 rounded-2xl bg-pearl py-2.5 pl-4 pr-12">
          <h2 className="font-[750] leading-none text-dark-bronze-coin">
            {player.name}
          </h2>
          <p className="text-[15px]/none font-[750] text-[#f36f7d]">
            {player.creatorID}
          </p>
        </div>
      </div>
    </div>
  );
}
