import { GroupCard } from "@components/GroupCard";
import { Header } from "@components/Header";
import { HightLight } from "@components/HightLight";

import * as S from "./styles";

export function Groups() {
  return (
    <S.Container>
      <Header />
      <HightLight title="Turmas" subtitle="Jogue com a sua turma" />
      <GroupCard title="Galera do biricu" />
    </S.Container>
  );
}
