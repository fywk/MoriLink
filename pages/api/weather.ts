import type { NextRequest } from "next/server";

export const config = {
  runtime: "edge",
};

export default async function handler(request: NextRequest) {
  const latitude = request.geo?.latitude ?? "3.1415";
  const longitude = request.geo?.longitude ?? "101.6865";

  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${process.env.OPENWEATHER_API_KEY}&units=metric`
  );
  const weather = await res.json();

  return new Response(JSON.stringify(weather));
}
