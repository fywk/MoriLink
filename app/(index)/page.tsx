import { IconArrowUpRight } from "@tabler/icons-react";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

import CalendarIcon from "@/components/CalendarIcon";
import { apps } from "@/data/apps";

type Item = (typeof apps)[number];

export default function HomePage() {
  return (
    <div className="grid grid-cols-3 gap-4 text-dark-bronze-coin">
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
      className="group flex flex-col items-center gap-y-2 focus:outline-none"
      {...linkProps}
    >
      <div
        className="h-full w-full transform overflow-hidden rounded-[1.875rem] p-px transition-transform duration-100 hover:scale-105 active:scale-90 group-focus-visible:scale-105"
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
              className="h-auto max-w-full"
              draggable={false}
            />
          )
        )}
      </div>
      <span
        className={clsx(
          isExternalLink && "flex items-center",
          "whitespace-nowrap text-[11px]/none font-bold tracking-tighter ring-pearl-aqua ring-offset-1 group-focus-visible:ring-2",
        )}
      >
        {item.name}
        {isExternalLink && <IconArrowUpRight size={11} stroke={2.5} />}
      </span>
    </LinkComponent>
  );
}
