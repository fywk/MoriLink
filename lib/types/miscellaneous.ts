import { STAR_SIGNS } from "../constants";

import type { NumericRange } from "./utility";

export type Audio = {
  title: string;
  src: string;
  image?: string;
};

export type CloudinaryImageProps = {
  public_id: string;
  filename: string;
  created_at: string;
  width: number;
  height: number;
  blurDataURL?: string;
};

export type Day = NumericRange<1, 31>;

export type Hemisphere = "Northern" | "Southern";

export type StarSign = (typeof STAR_SIGNS)[number];

export type IslandConfig = {
  name: string;
  hemisphere: Hemisphere;
  nativeFruit: "Apples" | "Cherries" | "Oranges" | "Peaches" | "Pears";
  residents: {
    /**
     * You can sort villagers in any order you want.
     * The default order is based on the order that they arrived on your island.
     * Note: The order you listed here will be the order they appeared in the app.
     */
    current: string[];
    former?: string[];
  };
  dream?: {
    address: string;
    updated: {
      date: string;
      time: string;
    };
  };
};

export type Month = NumericRange<1, 12>;

export type Pattern = {
  id: string;
  name: string;
  category: "normal" | "pro";
  pictures?: string[];
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
  registrationDate: string;
  creatorID?: string;
  happyHomeNetworkID?: string;
  isResidentRep: boolean;
};

export type WeatherCondition = "Rainy" | "Snowy" | "Sunny";
