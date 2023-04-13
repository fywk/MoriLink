import { villagers } from "animal-crossing";

import type { Villager } from "animal-crossing/lib/types/Villager";

export function getVillager(name: string): Villager | undefined {
  return villagers.find(
    (villager) => villager.name.toLowerCase() === name.toLowerCase()
  );
}
