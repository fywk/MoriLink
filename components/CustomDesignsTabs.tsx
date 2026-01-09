"use client";

import { Tab } from "@headlessui/react";
import clsx from "clsx";

import NormalCustomDesignsIcon from "./icons/NormalCustomDesignsIcon";
import ProCustomDesignsIcon from "./icons/ProCustomDesignsIcon";

type Props = {
  normalPanel: React.ReactNode;
  proPanel: React.ReactNode;
};

export default function CustomDesingsTabs({ normalPanel, proPanel }: Props) {
  return (
    <Tab.Group>
      <Tab.List className="flex gap-x-2.5 leading-none font-bold">
        <Tab
          className={({ selected }) =>
            clsx(
              "ui-focus-visible:ring-3 flex w-full items-center justify-center gap-x-1 rounded-2xl py-2.5 tracking-tight ring-(--theme-color) focus:outline-hidden",
              selected ? "bg-tiffany-blue text-white" : "bg-pearl text-beaver",
            )
          }
        >
          {({ selected }) => (
            <>
              <div
                className={clsx(
                  "flex size-5.5 items-center justify-center",
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
              "ui-focus-visible:ring-3 flex w-full items-center justify-center gap-x-1 rounded-2xl py-2.5 tracking-tight ring-(--theme-color) focus:outline-hidden",
              selected ? "bg-tiffany-blue text-white" : "bg-pearl text-beaver",
            )
          }
        >
          {({ selected }) => (
            <>
              <div
                className={clsx(
                  "flex size-5.5 items-center justify-center",
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
        <Tab.Panel className="ui-focus-visible:ring-3 ring-(--theme-color) ring-offset-4 ring-offset-alabaster focus:outline-hidden">
          {normalPanel}
        </Tab.Panel>
        <Tab.Panel className="ui-focus-visible:ring-3 ring-(--theme-color) ring-offset-4 ring-offset-alabaster focus:outline-hidden">
          {proPanel}
        </Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  );
}
