import type { AppConfig, IslandConfig, PatternsConfig, PlayerConfig } from "./types/config";

export const app: Readonly<AppConfig> = {
  title: "Nook++",
  description: "A hybrid recreation of NookPhone and NookLink from Animal Crossing: New Horizons",
  themeColor: "#82d7aa",
  location: {
    latitude: "3.1415",
    longitude: "101.6865",
  },
};

export const player: Readonly<PlayerConfig> = {
  name: "Francis",
  birth: {
    month: 10,
    day: 8,
  },
  comment: "Nothing ever last forever",
  title: "Inexperienced Problem Solver",
  registrationDate: "2020-03-20",
  creatorID: "MA-3831-5858-5426",
  // happyHomeNetworkID: "",
  isResidentRep: true,
};

export const island: Readonly<IslandConfig> = {
  name: "Para Para",
  hemisphere: "Northern",
  nativeFruit: "Oranges",
  dreamAddress: "DA-8948-7177-3853",
  residents: {
    current: [
      "Angus",
      "Stitches",
      "Maddie",
      "Merengue",
      "Sasha",
      "Ketchup",
      "Rudy",
      "Petri",
      "Marshal",
      "Alice",
    ],
    former: [
      "Sterling",
      "Cherry",
      "Aurora",
      "Dizzy",
      "Sprinkle",
      "Ken",
      "Portia",
      "Norma",
      "Marina",
    ],
  },
};

export const patterns: Readonly<PatternsConfig> = [
  {
    id: "MO-Y67L-TS75-2D0R",
    name: "Bicycle Sign",
    category: "normal",
  },
];
