import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";

export const Container = styled(SafeAreaView)`
  ${({ theme }) => css`
    flex: 1;
    background-color: ${theme.colors.gray_600};
    padding: 24px;
  `}
`;
