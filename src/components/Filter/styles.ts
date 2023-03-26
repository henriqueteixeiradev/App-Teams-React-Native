import styled, { css } from "styled-components/native";
import { TouchableOpacity } from "react-native";

export type FIlterStyleProps = {
  isActive?: boolean;
};

export const Container = styled(TouchableOpacity)<FIlterStyleProps>`
  ${({ theme, isActive }) =>
    isActive &&
    css`
      border: 1px solid ${theme.colors.green_700};
    `}

  ${({ theme }) => css`
    border-radius: 4px;
    margin-right: 12px;
    height: 38px;
    width: 70px;

    align-items: center;
    justify-content: center;
  `}
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.font_family.bold};
    font-size: ${theme.font_size.sm}px;
    color: ${theme.colors.white};
    text-transform: uppercase;
  `}
`;
