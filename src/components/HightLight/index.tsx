import * as S from "./styles";

interface HightLightProps {
  title: string;
  subtitle: string;
}

export function HightLight({ title, subtitle }: HightLightProps) {
  return (
    <S.Container>
      <S.Title>{title}</S.Title>
      <S.Subtitle>{subtitle}</S.Subtitle>
    </S.Container>
  );
}
