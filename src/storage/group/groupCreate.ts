import AsyncStorage from "@react-native-async-storage/async-storage";
import { GROUP_COLLECTION } from "@storage/storageConfig";
import { groupGetAll } from "./groupGetAll";
import { AppError } from "@utils/AppError";

export async function groupCreate(groupName: string) {
  try {
    const storedGroups = await groupGetAll();

    const groupAlreadyExists = storedGroups.includes(groupName);

    const groupNameIsEmpty =
      groupName.trim() === undefined ||
      groupName.trim() === null ||
      groupName.trim() === "";

    if (groupAlreadyExists) {
      throw new AppError("Já existe um grupo cadastrado com esse nome.");
    }

    if (groupNameIsEmpty) {
      throw new AppError("O nome do grupo não pode ser vazio.");
    }

    const groups = JSON.stringify([...storedGroups, groupName]);

    await AsyncStorage.setItem(GROUP_COLLECTION, groups);
  } catch (error) {
    throw error;
  }
}
