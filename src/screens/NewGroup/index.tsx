import { Button } from "@components/Button";
import { Header } from "@components/Header";
import { HightLight } from "@components/HightLight";
import { Input } from "@components/Input";
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
        <Input placeholder="Nome da turma" />
        <Button title="Criar" style={{ marginTop: 20 }} />
      </S.Content>
    </S.Container>
  );
}
