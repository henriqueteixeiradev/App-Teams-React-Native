import { useState, useCallback } from "react";
import { FlatList, Alert } from "react-native";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { GroupCard } from "@components/GroupCard";
import { Header } from "@components/Header";
import { HightLight } from "@components/HightLight";
import { ListEmpty } from "@components/ListEmpty";

import { groupGetAll } from "@storage/group/groupGetAll";

import * as S from "./styles";
import { Button } from "@components/Button";
import { Loading } from "@components/Loading";

export function Groups() {
  const [isLoading, setIsLoading] = useState(false);
  const [groups, setGroups] = useState<string[]>([]);

  const navigation = useNavigation();

  function handleNewGroup() {
    navigation.navigate("new");
  }

  async function fetchGroups() {
    try {
      setIsLoading(true);
      const data = await groupGetAll();
      setGroups(data);
    } catch (error) {
      Alert.alert("Ooops", "Não foi possível carregar as turmas.");
    } finally {
      setIsLoading(false);
    }
  }

  function handleOpenGroup(group: string) {
    navigation.navigate("players", { group });
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

      {isLoading ? (
        <Loading />
      ) : (
        <FlatList
          data={groups}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <GroupCard title={item} onPress={() => handleOpenGroup(item)} />
          )}
          contentContainerStyle={groups.length === 0 && { flex: 1 }}
          ListEmptyComponent={() => (
            <ListEmpty message="Que tal cadastrar a primeira turma?" />
          )}
        />
      )}

      <Button title="Criar nova turma" onPress={handleNewGroup} />
    </S.Container>
  );
}
