import type { AppConfig, IslandConfig, PatternsConfig, PlayerConfig } from "./types/config";

export const app: Readonly<AppConfig> = {
  title: "MoriLink",
  description: `A web app inspired by NookPhone and NookLink from the Animal Crossing: New Horizons game`,
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
  title: "Inexperienced Problem Solver",
  comment: "Nothing ever last forever",
  isResidentRep: true,
  registrationDate: {
    year: 2020,
    month: 3,
    day: 20,
  },
  creatorID: "MA-3831-5858-5426",
  // happyHomeNetworkID: "",
};

export const island: Readonly<IslandConfig> = {
  name: "Para Para",
  dreamAddress: "DA-8948-7177-3853",
  hemisphere: "Northern",
  nativeFruit: "Oranges",
  airportColor: "Orange",
  weatherSeed: 620746543,
  residents: {
    current: [
      "Stitches",
      "Maddie",
      "Merengue",
      "Sasha",
      "Ketchup",
      "Rudy",
      "Petri",
      "Marshal",
      "Alice",
      "Marlo",
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
      "Angus",
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
