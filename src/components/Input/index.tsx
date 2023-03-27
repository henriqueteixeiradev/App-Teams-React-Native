import * as S from "./styles";
import { TextInputProps, TextInput } from "react-native";
import { useTheme } from "styled-components/native";

type InputProps = TextInputProps & {
  inputRef?: React.RefObject<TextInput>;
};

export function Input({ inputRef, ...rest }: InputProps) {
  const { colors } = useTheme();

  return (
    <S.Container
      ref={inputRef}
      placeholderTextColor={colors.gray_300}
      {...rest}
    />
  );
}
