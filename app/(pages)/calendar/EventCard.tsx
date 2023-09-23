import clsx from "clsx";

type Props = {
  title: string;
  titleColors: string;
  cardClasses: string;
  children: React.ReactNode;
};

export default function EventCard({ title, titleColors, cardClasses, children }: Props) {
  return (
    <div className={clsx("flex flex-col gap-y-3 rounded-sm p-3.5", cardClasses)}>
      <h3
        className={clsx(
          "relative overflow-hidden rounded-sm bg-[#fffaed] px-3.5 py-1.5 text-center text-[15px]/none font-[750]",
          "before:absolute before:left-0 before:top-0 before:border-b-[12px] before:border-l-[12px] before:border-b-transparent",
          "after:absolute after:bottom-0 after:right-0 after:border-r-[12px] after:border-t-[12px] after:border-t-transparent",
          titleColors,
        )}
      >
        {title}
      </h3>
      {children}
    </div>
  );
}
