import type { Day, Month, Year } from "./date";
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
  dreamAddress?: `DA-${number}-${number}-${number}`;
  hemisphere: Hemisphere;
  nativeFruit: "Apples" | "Cherries" | "Oranges" | "Peaches" | "Pears";
  airportColor: "Blue" | "Yellow" | "Orange" | "Green";
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
};

export type PatternsConfig = Pattern[];

export type PlayerConfig = {
  name: string;
  birth: {
    month: Month;
    day: Day;
  };
  title: string;
  comment: string;
  isResidentRep: boolean;
  /**
   * The registration date could only be between 1 January 2000 and
   * 31 December 2060 as the game only works within this range.
   */
  registrationDate: {
    /** Valid years are between 2000 and 2060 inclusive only. */
    year: Year;
    month: Month;
    day: Day;
  };
  creatorID?: `MA-${number}-${number}-${number}`;
  happyHomeNetworkID?: `RA-${number}-${number}-${number}`;
};
