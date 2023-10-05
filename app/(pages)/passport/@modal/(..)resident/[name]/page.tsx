import VillagerModalContainer from "@/components/VillagerModalContainer";
import VillagerModalContent from "@/components/VillagerModalContent";
import { getVillager } from "@/lib/utils/villagers";

type Props = {
  params: { name: string };
};

export default function PassportPageResidentModal({ params }: Props) {
  const villager = getVillager(params.name);

  if (!villager) return null;

  return (
    <VillagerModalContainer parentPage="/passport">
      <VillagerModalContent villager={villager} />
    </VillagerModalContainer>
  );
}
