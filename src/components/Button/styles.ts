import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export type ButtonTypeStyleProps = "primary" | "secondary";

interface ContainerProps {
  type: ButtonTypeStyleProps;
}

export const Container = styled(TouchableOpacity)<ContainerProps>`
  ${({ theme, type }) => css`
    flex: 1%;
    min-height: 56px;
    max-height: 56px;
    justify-content: center;
    align-items: center;
    border-radius: 6px;
    background-color: ${type === "primary"
      ? theme.colors.green_700
      : theme.colors.red_dark};
  `}
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.font_size.md}px;
    color: ${theme.colors.white};
    font-family: ${theme.font_family.bold};
  `}
`;
