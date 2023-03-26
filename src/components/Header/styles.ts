import styled, { css } from "styled-components/native";
import { CaretLeft } from "phosphor-react-native";

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

export const BackButton = styled.TouchableOpacity`
  ${({ theme }) => css`
    flex: 1;
  `}
`;

export const BackIcon = styled(CaretLeft).attrs(({ theme }) => ({
  color: theme.colors.red,
  size: 32,
}))`
  ${({ theme }) => css``}
`;
