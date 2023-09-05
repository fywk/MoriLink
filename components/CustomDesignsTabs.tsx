"use client";

import { Tab } from "@headlessui/react";
import clsx from "clsx";

import { NormalCustomDesignsIcon, ProCustomDesignsIcon } from "./Icons";

type Props = {
  normalPanel: React.ReactNode;
  proPanel: React.ReactNode;
};

export default function CustomDesingsTabs({ normalPanel, proPanel }: Props) {
  return (
    <Tab.Group>
      <Tab.List className="flex gap-x-2.5 font-bold leading-none">
        <Tab
          className={({ selected }) =>
            clsx(
              "flex w-full items-center justify-center gap-x-1 rounded-2xl py-2.5 tracking-tight ring-[var(--theme-color)] focus:outline-none ui-focus-visible:ring-3",
              selected ? "bg-tiffany-blue text-white" : "bg-pearl text-beaver",
            )
          }
        >
          {({ selected }) => (
            <>
              <div
                className={clsx(
                  "flex h-5.5 w-5.5 items-center justify-center",
                  selected ? "text-white" : "text-beaver",
                )}
              >
                <NormalCustomDesignsIcon />
              </div>
              {"Normal Designs"}
            </>
          )}
        </Tab>
        <Tab
          className={({ selected }) =>
            clsx(
              "flex w-full items-center justify-center gap-x-1 rounded-2xl py-2.5 tracking-tight ring-[var(--theme-color)] focus:outline-none ui-focus-visible:ring-3",
              selected ? "bg-tiffany-blue text-white" : "bg-pearl text-beaver",
            )
          }
        >
          {({ selected }) => (
            <>
              <div
                className={clsx(
                  "flex h-5.5 w-5.5 items-center justify-center",
                  selected ? "text-white" : "text-beaver",
                )}
              >
                <ProCustomDesignsIcon />
              </div>
              {"Pro Designs"}
            </>
          )}
        </Tab>
      </Tab.List>
      <Tab.Panels className="pt-6">
        <Tab.Panel className="ring-[var(--theme-color)] ring-offset-4 ring-offset-alabaster focus:outline-none ui-focus-visible:ring-3">
          {normalPanel}
        </Tab.Panel>
        <Tab.Panel className="ring-[var(--theme-color)] ring-offset-4 ring-offset-alabaster focus:outline-none ui-focus-visible:ring-3">
          {proPanel}
        </Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  );
}
