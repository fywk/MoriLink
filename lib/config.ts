import { IslandConfig, PlayerConfig } from "./types";

export const site = {
  title: "Nook++",
  description: "My ACNH Wiki",
  themeColor: "#82d7aa",
};

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
  passportPhoto: "passport.png",
};

export const island: IslandConfig = {
  name: "Para Para",
  hemisphere: "Northern",
  nativeFruit: "Oranges",
  islandRating: 4,
  // weatherSeed: "620746543",
  residents: {
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
