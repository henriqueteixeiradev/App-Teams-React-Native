import { ButtonIcon } from "@components/ButtonIcon";
import * as S from "./styles";

interface PlayerCardProps {
  name: string;
  onRemove: () => void;
}

export const PlayerCard = ({ name, onRemove }: PlayerCardProps) => {
  return (
    <S.Container>
      <S.Icon name="person" />
      <S.Name>{name}</S.Name>
      <ButtonIcon icon="close" type="secondary" onPress={onRemove} />
    </S.Container>
  );
};
