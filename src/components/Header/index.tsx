import * as S from "./styles";

import logoimg from "@assets/logo.png";

interface HeaderProps {
  showbackButton?: boolean;
}

export function Header({ showbackButton = false }: HeaderProps) {
  return (
    <S.Container>
      {showbackButton && (
        <S.BackButton>
          <S.BackIcon />
        </S.BackButton>
      )}

      <S.Logo source={logoimg} />
    </S.Container>
  );
}
