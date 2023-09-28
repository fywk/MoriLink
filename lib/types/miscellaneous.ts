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

export type Hemisphere = "Northern" | "Southern";

export type Season = "Spring" | "Summer" | "Fall" | "Winter";

export type StarSign = (typeof STAR_SIGNS)[number];

export type Pattern = {
  id: string;
  name: string;
  category: "normal" | "pro";
  pictures?: string[];
};

export type WeatherCondition = "Rainy" | "Snowy" | "Sunny";
