import { Button } from "@components/Button";
import { Header } from "@components/Header";
import { HightLight } from "@components/HightLight";
import * as S from "./styles";

export function NewGroup() {
  return (
    <S.Container>
      <Header showbackButton />

      <S.Content>
        <S.Icon />
        <HightLight
          title="Nova Turma"
          subtitle="Crie a turma para adicionar as pessoas"
        />
        <Button title="Criar" />
      </S.Content>
    </S.Container>
  );
}
