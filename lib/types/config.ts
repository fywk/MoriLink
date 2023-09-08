import type { DateFormat, Day, Month } from "./date";
import type { Hemisphere, Pattern } from "./miscellaneous";

export type AppConfig = {
  title: string;
  description?: string;
  themeColor: string;
  location: {
    latitude: string;
    longitude: string;
  };
};

export type IslandConfig = {
  name: string;
  hemisphere: Hemisphere;
  nativeFruit: "Apples" | "Cherries" | "Oranges" | "Peaches" | "Pears";
  /**
   * You can sort villager residents in any order you want.
   * The default order in the official app is based on the order that they arrived on your island.
   *
   * Note: The order you put in the array will be the order they appeared in the app.
   */
  residents: {
    current: string[];
    former?: string[];
  };
  dream?: {
    address: string;
    updated: {
      /** Date should be in ISO 8601 `YYYY-MM-DD` format, e.g. "2020-03-20" */
      date: DateFormat;
      time: string;
    };
  };
};

export type PatternsConfig = Pattern[];

export type PlayerConfig = {
  name: string;
  birth: {
    month: Month;
    day: Day;
  };
  comment: string;
  title: string;
  /** Date should be in ISO 8601 `YYYY-MM-DD` format, e.g. "2020-03-20" */
  registrationDate: DateFormat;
  creatorID?: string;
  happyHomeNetworkID?: string;
  isResidentRep: boolean;
};
