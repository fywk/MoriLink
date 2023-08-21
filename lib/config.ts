import type { IslandConfig, PatternsConfig, PlayerConfig } from "./types/miscellaneous";

export const player: Readonly<PlayerConfig> = {
  name: "Francis",
  birth: {
    month: 10,
    day: 8,
  },
  comment: "Nothing ever last forever",
  title: "Inexperienced Problem Solver",
  registrationDate: "20/3/2020",
  creatorID: "MA-3831-5858-5426",
  // happyHomeNetworkID: "",
  isResidentRep: true,
};

export const island: Readonly<IslandConfig> = {
  name: "Para Para",
  hemisphere: "Northern",
  nativeFruit: "Oranges",
  residents: {
    current: [
      "Sprinkle",
      "Ken",
      "Norma",
      "Angus",
      "Stitches",
      "Portia",
      "Marina",
      "Maddie",
      "Merengue",
      "Sasha",
    ],
    former: ["Sterling", "Cherry", "Aurora", "Dizzy"],
  },
  dream: {
    address: "DA-8948-7177-3853",
    updated: {
      date: "25/3/2023",
      time: "4:30 PM",
    },
  },
};

export const patterns: Readonly<PatternsConfig> = [
  {
    id: "MO-Y67L-TS75-2D0R",
    name: "Bicycle Sign",
    category: "normal",
  },
];
