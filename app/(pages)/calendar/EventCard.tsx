import clsx from "clsx";

type Props = {
  title: string;
  titleColors: string;
  cardClasses: string;
  children: React.ReactNode;
};

export default function EventCard({ title, titleColors, cardClasses, children }: Props) {
  return (
    <div className={clsx("flex flex-col gap-y-3 rounded-xs p-3.5", cardClasses)}>
      <h3
        className={clsx(
          "relative overflow-hidden rounded-xs bg-[#fffaed] px-3.5 py-1.5 text-center text-[15px]/none font-[750]",
          "before:absolute before:top-0 before:left-0 before:border-b-12 before:border-l-12 before:border-b-transparent",
          "after:absolute after:right-0 after:bottom-0 after:border-t-12 after:border-r-12 after:border-t-transparent",
          titleColors,
        )}
      >
        {title}
      </h3>
      {children}
    </div>
  );
}
