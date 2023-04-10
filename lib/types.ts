import { STAR_SIGNS } from "./constants";

export type Audio = {
  title: string;
  src: string;
  image?: string;
};

export type Day = NumericRange<1, 31>;

export type StarSign = (typeof STAR_SIGNS)[number];

export type IslandConfig = {
  name: string;
  hemisphere: "Northern" | "Southern";
  nativeFruit: NativeFruit;
  islandRating: NumericRange<1, 5> | null;
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

type NativeFruit = "Apples" | "Cherries" | "Oranges" | "Peaches" | "Pears";

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
  id: string; // same as Cloudinary image name w/o the folder name and file extensions ==> "folder/placeholder.jpg" === "placeholder"
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
