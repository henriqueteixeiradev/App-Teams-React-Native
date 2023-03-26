import styled, { css } from "styled-components/native";

export const Container = styled.View`
  ${({ theme }) => css`
    flex: 1;
    background-color: ${theme.colors.gray_600};
    padding: 24px;
  `}
`;

export const Form = styled.View`
  ${({ theme }) => css`
    width: 100%;
    background-color: ${theme.colors.gray_700};
    flex-direction: row;
    justify-content: center;
    border-radius: 6px;
  `}
`;
