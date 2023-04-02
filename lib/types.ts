export type Audio = {
  title: string;
  src: string;
  image?: string;
};

export type StarSign =
  | "Capricorn"
  | "Aquarius"
  | "Pisces"
  | "Aries"
  | "Taurus"
  | "Gemini"
  | "Cancer"
  | "Leo"
  | "Virgo"
  | "Libra"
  | "Scorpio"
  | "Sagittarius";

export type IslandConfig = {
  name: string;
  hemisphere: "Northern" | "Southern";
  nativeFruit: NativeFruit;
  islandRating: 1 | 2 | 3 | 4 | 5 | null;
  weatherSeed?: string;
  residents: {
    current: string[];
    former?: string[];
  };
  dream?: {
    address: string;
    updated: { date: string; time: string };
  };
};


export type NativeFruit =
  | "Apples"
  | "Cherries"
  | "Oranges"
  | "Peaches"
  | "Pears";

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
  passportPhoto: string;
};
