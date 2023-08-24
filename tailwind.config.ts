import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts}",
  ],
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    extend: {
      colors: {
        // Colour pallette used in this project
        // Names from color-name.com
        alabaster: "#f4f1e3",
        champagne: "#f4ecca",
        pearl: "#f1e7cc",
        bone: "#dfd9c9",
        "dutch-white": "#ede1b8",
        beaver: "#908669",
        "dark-bronze-coin": "#4d3906",
        "old-burgundy": "#41352f",
        "pearl-aqua": "#82d7aa",
        "tiffany-blue": "#19c5b6",
      },
      ringWidth: {
        3: "3px",
        5: "5px",
      },
      spacing: {
        4.5: "1.125rem",
        5.5: "1.375rem",
        6.5: "1.625rem",
        7.5: "1.825rem",
        8.5: "2.125rem",
        9.5: "2.375rem",
        10.5: "2.625rem",
      },
    },
  },
  plugins: [require("@headlessui/tailwindcss")],
};

export default config;
