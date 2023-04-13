import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const latitude = request.geo?.latitude ?? "3.1415";
  const longitude = request.geo?.longitude ?? "101.6865";

  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${process.env.OPENWEATHER_API_KEY}&units=metric`
  );
  const weather = await res.json();

  return NextResponse.json(weather);
}
