import { useNavigation } from "@react-navigation/native";
import * as S from "./styles";

import logoimg from "@assets/logo.png";

interface HeaderProps {
  showbackButton?: boolean;
}

export function Header({ showbackButton = false }: HeaderProps) {
  const navigation = useNavigation();

  function handleGoBack() {
    navigation.navigate("groups");
  }

  return (
    <S.Container>
      {showbackButton && (
        <S.BackButton onPress={handleGoBack}>
          <S.BackIcon />
        </S.BackButton>
      )}

      <S.Logo source={logoimg} />
    </S.Container>
  );
}
