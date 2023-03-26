import { ButtonIcon } from "@components/ButtonIcon";
import { Filter } from "@components/Filter";
import { Header } from "@components/Header";
import { HightLight } from "@components/HightLight";
import { Input } from "@components/Input";
import * as S from "./styles";

export function Players() {
  return (
    <S.Container>
      <Header showbackButton />
      <HightLight
        title="Nome da turma"
        subtitle="Adicione a galera e separe os times"
      />

      <S.Form>
        <Input placeholder="Nome do jogador" autoCorrect={false} />
        <ButtonIcon icon="add" />
      </S.Form>

      <Filter title="Time A" isActive />
    </S.Container>
  );
}
