import Image from "next/image";

import DateString from "@/components/DateString";
import { app, player } from "@/lib/config";
import { DATE_FORMAT_SHORT } from "@/lib/constants";
import morilinkLogo from "@/public/images/MoriLink_Logo.svg";

export default function HomePageLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex size-full min-h-dvh items-center justify-center bg-dutch-white bg-[radial-gradient(#f4ecca_15%,transparent_15%),radial-gradient(#f4ecca_14%,transparent_14%)] bg-size-[25px_25px] bg-position-[0_0,12.5px_12.5px] bg-repeat">
      <div className="m-auto grid w-full max-w-100 grid-cols-1 gap-y-2 px-5 pt-8 pb-[calc(2rem+env(safe-area-inset-bottom))]">
        <div className="flex justify-center">
          <Image src={morilinkLogo} alt={`${app.name} logo`} className="w-40" draggable={false} />
        </div>
        <div className="w-full rounded-[5rem] bg-alabaster pt-8.5 pb-9.5">
          <div className="grid h-full grid-rows-[auto_1fr] gap-y-7.5">
            <div className="flex items-center px-9 text-sm font-semibold tracking-normal text-bone">
              <div className="flex grow items-center gap-x-2">
                <button
                  className="flex h-5.5 w-9.5 transform items-center justify-center rounded-full bg-bone text-alabaster transition active:scale-90"
                  type="button"
                  tabIndex={-1}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </button>
                <span>{player.name}</span>
              </div>
              <div className="flex-none">
                <span className="place-self-end">
                  <DateString format={DATE_FORMAT_SHORT} />
                </span>
              </div>
            </div>
            <main className="min-h-90 px-7.5" id="content">
              {children}
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}
