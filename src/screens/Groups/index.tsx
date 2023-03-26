import { useState, useCallback } from "react";
import { FlatList } from "react-native";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { GroupCard } from "@components/GroupCard";
import { Header } from "@components/Header";
import { HightLight } from "@components/HightLight";
import { ListEmpty } from "@components/ListEmpty";

import { groupGetAll } from "@storage/group/groupGetAll";

import * as S from "./styles";
import { Button } from "@components/Button";

export function Groups() {
  const [groups, setGroups] = useState<string[]>([
    "Grupo do biricu",
    "Grupo da Iolanda",
    "Grupo da Karolyna",
    "Grupo do Mikael",
  ]);

  const navigation = useNavigation();

  function handleNewGroup() {
    navigation.navigate("new");
  }

  async function fetchGroups() {
    try {
      const data = await groupGetAll();
      setGroups(data);
    } catch (error) {
      console.log(error);
    }
  }

  useFocusEffect(
    useCallback(() => {
      fetchGroups();
    }, [])
  );

  return (
    <S.Container>
      <Header />
      <HightLight title="Turmas" subtitle="Jogue com a sua turma" />
      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <GroupCard title={item} />}
        contentContainerStyle={groups.length === 0 && { flex: 1 }}
        ListEmptyComponent={() => (
          <ListEmpty message="Que tal cadastrar a primeira turma?" />
        )}
      />

      <Button title="Criar nova turma" onPress={handleNewGroup} />
    </S.Container>
  );
}
