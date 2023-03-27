import { useState, useCallback, useRef } from "react";
import { Alert, TextInput, Keyboard } from "react-native";
import { Button } from "@components/Button";
import { Header } from "@components/Header";
import { HightLight } from "@components/HightLight";
import { Input } from "@components/Input";
import * as S from "./styles";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { groupCreate } from "@storage/group/groupCreate";
import { AppError } from "@utils/AppError";

export function NewGroup() {
  const [group, setGroup] = useState("");

  const newGroupNameInputRef = useRef<TextInput>(null);

  const navigation = useNavigation();

  async function handleCreateGroup() {
    try {
      await groupCreate(group);
      navigation.navigate("players", { group });
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert("Ooops", error.message);
      } else {
        Alert.alert("Ooops", "Não foi possível criar um novo grupo.");
      }
    }
  }

  useFocusEffect(
    useCallback(() => {
      newGroupNameInputRef.current?.focus();
    }, [])
  );

  return (
    <S.Container>
      <Header showbackButton />

      <S.Content>
        <S.Icon />
        <HightLight
          title="Nova Turma"
          subtitle="Crie a turma para adicionar as pessoas"
        />
        <Input
          inputRef={newGroupNameInputRef}
          placeholder="Nome da turma"
          onChangeText={setGroup}
          value={group}
          onSubmitEditing={handleCreateGroup}
          returnKeyType="done"
        />
        <Button
          title="Criar"
          style={{ marginTop: 20 }}
          onPress={handleCreateGroup}
        />
      </S.Content>
    </S.Container>
  );
}
