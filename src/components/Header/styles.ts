import styled, { css } from "styled-components/native";

export const Container = styled.View`
  ${({ theme }) => css`
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  `}
`;

export const Logo = styled.Image`
  ${({ theme }) => css`
    width: 55px;
    height: 55px;
  `}
`;
