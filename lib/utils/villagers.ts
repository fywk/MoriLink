import villagers from "animal-crossing/lib/data/Villagers.json";

export type Villager = (typeof villagers)[number];

export function getVillager(name: string): Villager | undefined {
  return villagers.find((villager) => villager.name.toLowerCase() === name.toLowerCase());
}

export default villagers;
