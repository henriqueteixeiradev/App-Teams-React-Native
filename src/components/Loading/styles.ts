import styled, { css } from "styled-components/native";
import { ActivityIndicator } from "react-native";

export const Container = styled.View`
  ${({ theme }) => css`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: ${theme.colors.gray_600};
  `}
`;

export const LoadIndicator = styled.ActivityIndicator.attrs(({ theme }) => ({
  color: theme.colors.green_700,
  size: 40,
}))`
  ${({ theme }) => css``}
`;
