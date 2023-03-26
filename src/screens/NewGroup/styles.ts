import styled, { css } from "styled-components/native";
import { UsersThree } from "phosphor-react-native";

export const Container = styled.View`
  ${({ theme }) => css`
    flex: 1;
    background-color: ${theme.colors.gray_600};
    padding: 24px;
  `}
`;

export const Content = styled.View`
  ${({ theme }) => css`
    flex: 1;
    justify-content: center;
  `}
`;

export const Icon = styled(UsersThree).attrs(({ theme }) => ({
  color: theme.colors.green_700,
  size: 56,
}))`
  ${({ theme }) => css`
    align-self: center;
  `}
`;
