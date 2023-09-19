import DateString from "./DateString";

export default function CalendarIcon() {
  return (
    <div className="flex aspect-square h-full w-full items-center justify-center">
      <div className="@container grid aspect-square w-3/5 translate-y-px -rotate-[7deg] grid-rows-[20%_1fr]">
        <div className="relative rounded-t-xl bg-red-400">
          <div className="absolute bottom-1 left-[20%] h-2.5 w-[3px] rounded-full bg-dark-bronze-coin"></div>
          <div className="absolute bottom-1 right-[20%] h-2.5 w-[3px] rounded-full bg-dark-bronze-coin"></div>
        </div>
        <div className="flex h-full items-center justify-center rounded-b-xl bg-white">
          <span className="translate-y-px text-[70cqw]/none font-[750] tracking-tighter">
            <DateString format="D" />
          </span>
        </div>
      </div>
    </div>
  );
}
