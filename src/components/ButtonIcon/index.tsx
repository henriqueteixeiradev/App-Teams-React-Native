import { TouchableOpacityProps } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import * as S from "./styles";

type ButtonIconProps = TouchableOpacityProps & {
  type?: S.ButtonIconTypeStyleProps;
  icon: keyof typeof MaterialIcons.glyphMap;
};

export function ButtonIcon({
  type = "primary",
  icon,
  ...rest
}: ButtonIconProps) {
  return (
    <S.Container {...rest}>
      <S.Icon type={type} name={icon} />
    </S.Container>
  );
}
