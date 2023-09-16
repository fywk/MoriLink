import { island } from "@/lib/config";
import iconAbout from "@/public/images/appicons/About.png";
import iconBlog from "@/public/images/appicons/Blog.png";
import iconCustomDesigns from "@/public/images/appicons/Custom_Design.png";
import iconGallery from "@/public/images/appicons/Gallery.png";
import iconMap from "@/public/images/appicons/Map.png";
import iconMusic from "@/public/images/appicons/Music.png";
import iconPassport from "@/public/images/appicons/Passport.png";
import iconWeather from "@/public/images/appicons/Weather.png";

export const apps = [
  {
    name: "Passport",
    url: "/passport",
    icon: iconPassport,
    bgColour: "#80bf8c",
  },
  ...(typeof island.weatherSeed !== "undefined"
    ? [
        {
          name: "Weather",
          description: `Check ${island.name}'s weather on MeteoNook`,
          url: `https://wuffs.org/acnh/weather/?v1&${encodeURI(island.name)}&${island.weatherSeed}&${island.hemisphere[0]}`, // prettier-ignore
          icon: iconWeather,
          bgColour: "#8a9af1",
        },
      ]
    : []),
  {
    name: "Blog",
    url: "/blog",
    icon: iconBlog,
    bgColour: "#ccd85d",
  },
  {
    name: "Gallery",
    url: "/gallery",
    icon: iconGallery,
    bgColour: "#f98d63",
  },
  {
    name: "Music",
    url: "/music",
    icon: iconMusic,
    bgColour: "#c1ea75",
  },
  {
    name: "About",
    url: "/about",
    icon: iconAbout,
    bgColour: "#9c835c",
  },
  {
    name: "Designs",
    url: "/designs",
    icon: iconCustomDesigns,
    bgColour: "#f6afb3",
  },
  {
    name: "Map",
    url: "/map",
    icon: iconMap,
    bgColour: "#7fd5ba",
  },
];
