import { useState } from "react";
import { FlatList } from "react-native";
import { GroupCard } from "@components/GroupCard";
import { Header } from "@components/Header";
import { HightLight } from "@components/HightLight";
import { ListEmpty } from "@components/ListEmpty";

import * as S from "./styles";

export function Groups() {
  const [groups, setGroups] = useState<string[]>([
    "Grupo do biricu",
    "Grupo da Iolanda",
    "Grupo da Karolyna",
    "Grupo do Mikael",
    "Grupo da Quitéria",
    "Grupo do Bruno",
    "Grupo da Teté",
    "Grupo da Buluga",
  ]);

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
    </S.Container>
  );
}
