import { IslandConfig, PatternsConfig, PlayerConfig } from "./types";

export const player: PlayerConfig = {
  name: "Francis",
  birth: {
    month: 10,
    day: 8,
  },
  comment: "Nothing ever last forever",
  title: "Hobby-Level Photographer",
  registrationDate: "20/3/2020",
  creatorID: "MA-3831-5858-5426",
  // happyHomeNetworkID: "",
  isResidentRep: true,
};

export const island: IslandConfig = {
  name: "Para Para",
  hemisphere: "Northern",
  nativeFruit: "Oranges",
  islandRating: 4,
  residents: {
    // You can sort villagers in any order you want.
    // The default order is based on the order that they arrived on your island.
    // Note: The order you listed here will be the order they appeared in the app.
    current: [
      "Dizzy",
      "Sprinkle",
      "Aurora",
      "Ken",
      "Norma",
      "Angus",
      "Stitches",
      "Portia",
      "Marina",
      "Maddie",
    ],
    former: ["Sterling", "Cherry"],
  },
  dream: {
    address: "DA-8948-7177-3853",
    updated: { date: "25/3/2023", time: "4:30 PM" },
  },
};

export const patterns: PatternsConfig = [
  {
    id: "MO-Y67L-TS75-2D0R",
    name: "Bicycle Sign",
    category: "normal",
  },
];
