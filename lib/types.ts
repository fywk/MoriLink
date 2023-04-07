import { STAR_SIGNS } from "./constants";

export type Audio = {
  title: string;
  src: string;
  image?: string;
};

export type StarSign = (typeof STAR_SIGNS)[number];

export type IslandConfig = {
  name: string;
  hemisphere: "Northern" | "Southern";
  nativeFruit: NativeFruit;
  islandRating: 1 | 2 | 3 | 4 | 5 | null;
  residents: {
    current: string[];
    former?: string[];
  };
  dream?: {
    address: string;
    updated: { date: string; time: string };
  };
};

type NativeFruit = "Apples" | "Cherries" | "Oranges" | "Peaches" | "Pears";

export type Pattern = {
  id: string;
  name: string;
  category: "normal" | "pro";
  screenshots?: string[];
};

export type PatternsConfig = Pattern[];

export type PlayerConfig = {
  name: string;
  birth: {
    month: number;
    day: number;
  };
  comment: string;
  title: string;
  registrationDate: string;
  creatorID?: string;
  happyHomeNetworkID?: string;
  isResidentRep: boolean;
};
