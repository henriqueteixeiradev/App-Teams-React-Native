import AsyncStorage from "@react-native-async-storage/async-storage";
import { AppError } from "@utils/AppError";
import { PLAYER_COLLECTION, GROUP_COLLECTION } from "@storage/storageConfig";
import { PlayerStorageDTO } from "@storage/player/PlayerStorageDTO";
import { playersGetByGroup } from "@storage/player/playersGetByGroup";
import { groupGetAll } from "@storage/group/groupGetAll";

export async function groupRemoveByName(groupDeleted: string) {
  try {
    const storageGroups = await groupGetAll();

    const groups = storageGroups.filter((group) => group !== groupDeleted);

    await AsyncStorage.setItem(GROUP_COLLECTION, JSON.stringify(groups));

    await AsyncStorage.removeItem(`${PLAYER_COLLECTION}-${groupDeleted}`);
  } catch (error) {
    throw error;
  }
}
