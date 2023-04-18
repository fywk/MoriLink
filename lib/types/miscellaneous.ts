import { STAR_SIGNS } from "../constants";

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

export type StarSign = (typeof STAR_SIGNS)[number];

export type IslandConfig = {
  name: string;
  hemisphere: "Northern" | "Southern";
  nativeFruit: "Apples" | "Cherries" | "Oranges" | "Peaches" | "Pears";
  residents: {
    current: string[];
    former?: string[];
  };
  dream?: {
    address: string;
    updated: { date: string; time: string };
  };
};

export type Month = NumericRange<1, 12>;

type NumericRange<
  START extends number,
  END extends number,
  ARR extends unknown[] = [],
  ACC extends number = never
> = ARR["length"] extends END
  ? ACC | START | END
  : NumericRange<
      START,
      END,
      [...ARR, 1],
      ARR[START] extends undefined ? ACC : ACC | ARR["length"]
    >;

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
