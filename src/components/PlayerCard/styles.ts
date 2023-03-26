import styled, { css } from "styled-components/native";
import { MaterialIcons } from "@expo/vector-icons";

export const Container = styled.View`
  ${({ theme }) => css`
    width: 100%;
    height: 56px;
    background-color: ${theme.colors.gray_500};
    flex-direction: row;
    align-items: center;
    margin-bottom: 16px;
    border-radius: 6px;
  `}
`;

export const Name = styled.Text`
  ${({ theme }) => css`
    flex: 1;
    font-size: ${theme.font_size.md}px;
    color: ${theme.colors.gray_200};
    font-family: ${theme.font_family.regular};
  `}
`;

export const Icon = styled(MaterialIcons).attrs(({ theme }) => ({
  size: 24,
  color: theme.colors.gray_200,
}))`
  ${({ theme }) => css`
    margin-left: 16px;
    margin-right: 4px;
  `}
`;
