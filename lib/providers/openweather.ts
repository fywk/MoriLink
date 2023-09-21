import { z } from "zod";

import { env } from "../env.mjs";

export type WeatherData = {
  id: number;
  description: string;
  city: string;
  country: string;
};

const apiRoot = "https://api.openweathermap.org/data/2.5";
const apiKey = env.OPENWEATHER_API_KEY;

const CurrentWeatherSchema = z.object({
  weather: z
    .array(
      z.object({
        id: z.number(),
        description: z.string(),
      }),
    )
    .nonempty(),
  sys: z.object({
    country: z.string().min(1),
  }),
  name: z.string().min(1),
});

/**
 * @param lat - Latitude in decimal degrees format.
 * @param lon - Longitude in decimal degrees format.
 */
export async function getCurrentWeather(lat: string, lon: string): Promise<WeatherData | null> {
  const currentWeatherEndpoint = `${apiRoot}/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

  const response = await fetch(currentWeatherEndpoint);
  const result = CurrentWeatherSchema.safeParse(await response.json());

  if (!result.success) return null;

  const { weather, sys, name } = result.data;

  const currentWeather: WeatherData = {
    id: weather[0].id,
    description: weather[0].description,
    city: name,
    country: sys.country,
  };

  return currentWeather;
}
