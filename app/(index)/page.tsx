import Image from "next/image";
import Link from "next/link";

import apps from "@/data/apps.json";

export default async function HomePage() {
  await new Promise((resolve) => setTimeout(resolve, 1500));

  return (
    <div className="grid grid-cols-3 gap-4 text-dark-bronze-coin">
      {apps.map((app) => (
        <Link href={app.url} key={app.name}>
          <div className="group flex flex-col items-center gap-y-2 focus:outline-none">
            <Image
              src={`/images/appicons/${app.icon}`}
              width={150}
              height={150}
              alt=""
              loading="eager"
              draggable={false}
              className="h-auto max-w-full transform overflow-hidden rounded-[1.875rem] p-px transition-transform duration-100 hover:scale-105 active:scale-90 group-focus-visible:scale-110"
              style={{ backgroundColor: app.bgColour }}
            />
            <span className="whitespace-nowrap text-[11px]/none font-bold tracking-tighter">
              {app.name}
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}
