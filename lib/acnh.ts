import villagers from "animal-crossing/lib/data/Villagers.json";

type Villager = (typeof villagers)[number];

export function getVillager(name: string): Villager | undefined {
  return villagers.find(
    (villager) => villager.name.toLowerCase() === name.toLowerCase()
  );
}
