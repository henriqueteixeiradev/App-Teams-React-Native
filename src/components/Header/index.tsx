import * as S from "./styles";

import logoimg from "@assets/logo.png";

export function Header() {
  return (
    <S.Container>
      <S.Logo source={logoimg} />
    </S.Container>
  );
}
