import { IconArrowUpRight } from "@tabler/icons-react";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

import CalendarIcon from "@/components/CalendarIcon";
import { apps } from "@/data/apps";

type Item = (typeof apps)[number];

export default function HomePage() {
  return (
    <div className="@container grid grid-cols-3 gap-4 text-dark-bronze-coin">
      {apps.map((app) => (
        <AppGridItem item={app} key={app.name} />
      ))}
    </div>
  );
}

function AppGridItem({ item }: { item: Item }) {
  const isExternalLink = item.url.startsWith("http");

  const LinkComponent = isExternalLink ? "a" : Link;
  const linkProps = {
    href: item.url,
    ...(item.description && { title: item.description }),
    ...(LinkComponent === "a" && { target: "_blank" }),
  };

  return (
    <LinkComponent
      className="group flex flex-col items-center gap-y-2 focus:outline-hidden"
      {...linkProps}
    >
      <div
        className="size-full transform overflow-hidden rounded-[10cqw] p-px transition-transform duration-100 group-focus-visible:scale-105 hover:scale-105 active:scale-90"
        style={{ backgroundColor: item.bgColour }}
      >
        {item.name === "Calendar" ? (
          <CalendarIcon />
        ) : (
          item.icon && (
            <Image
              src={item.icon}
              alt=""
              loading="eager"
              className="size-full rounded-[10cqw]"
              draggable={false}
            />
          )
        )}
      </div>
      <span
        className={clsx(
          isExternalLink && "flex items-center",
          "text-[11px]/none font-bold tracking-tighter whitespace-nowrap ring-pearl-aqua ring-offset-1 group-focus-visible:ring-2",
        )}
      >
        {item.name}
        {isExternalLink && <IconArrowUpRight size={11} stroke={2.5} />}
      </span>
    </LinkComponent>
  );
}
