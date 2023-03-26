import * as S from "./styles";
import { TextInputProps } from "react-native";
import { useTheme } from "styled-components/native";

export function Input({ ...rest }: TextInputProps) {
  const { colors } = useTheme();

  return <S.Container placeholderTextColor={colors.gray_300} {...rest} />;
}
