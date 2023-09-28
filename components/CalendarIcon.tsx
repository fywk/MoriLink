import DateString from "./DateString";

export default function CalendarIcon() {
  return (
    <div className="flex aspect-square h-full w-full items-center justify-center">
      <div className="grid aspect-square w-[58%] translate-y-px -rotate-[7deg] grid-rows-[20%_1fr] @container">
        <div className="relative rounded-t-xl bg-red-400">
          <div className="absolute bottom-[7.5cqw] left-[22.5cqw] h-full w-[3px] rounded-full bg-dark-bronze-coin"></div>
          <div className="absolute bottom-[7.5cqw] right-[22.5cqw] h-full w-[3px] rounded-full bg-dark-bronze-coin"></div>
        </div>
        <div className="flex h-full items-center justify-center rounded-b-xl bg-white">
          <span className="text-[70cqw]/none font-[750] tracking-tighter">
            <DateString format="D" />
          </span>
        </div>
      </div>
    </div>
  );
}
