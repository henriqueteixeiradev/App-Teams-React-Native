import { useState } from "react";
import { FlatList } from "react-native";
import { GroupCard } from "@components/GroupCard";
import { Header } from "@components/Header";
import { HightLight } from "@components/HightLight";

import * as S from "./styles";

export function Groups() {
  const [groups, setGroups] = useState<string[]>([
    "Galera da Biricu",
    "Galera do Soppa",
  ]);

  return (
    <S.Container>
      <Header />
      <HightLight title="Turmas" subtitle="Jogue com a sua turma" />
      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <GroupCard title={item} />}
      />
    </S.Container>
  );
}
