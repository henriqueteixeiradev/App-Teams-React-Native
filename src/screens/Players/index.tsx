import { Header } from "@components/Header";
import { HightLight } from "@components/HightLight";
import * as S from "./styles";

export function Players() {
  return (
    <S.Container>
      <Header showbackButton />
      <HightLight
        title="Nome da turma"
        subtitle="Adicione a galera e separe os times"
      />
    </S.Container>
  );
}
