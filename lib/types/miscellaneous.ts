import { STAR_SIGNS } from "../constants";

import type { NumericRange } from "./utility";

export type Audio = {
  title: string;
  src: string;
  image?: string;
};

export type CloudinaryImageProps = {
  public_id: string;
  /**
   * The filename of the image in the format of `YYYYMMDD_HHMMSS`.
   */
  filename: string;
  created_at: string;
  width: number;
  height: number;
  blurDataURL?: string;
};

export type Day = NumericRange<1, 31>;

export type Hemisphere = "Northern" | "Southern";

export type StarSign = (typeof STAR_SIGNS)[number];

export type Month = NumericRange<1, 12>;

export type Pattern = {
  id: string;
  name: string;
  category: "normal" | "pro";
  pictures?: string[];
};

export type WeatherCondition = "Rainy" | "Snowy" | "Sunny";
