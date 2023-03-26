import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";
import { MaterialIcons } from "@expo/vector-icons";

export type ButtonIconTypeStyleProps = "primary" | "secondary";

interface ContainerProps {
  type: ButtonIconTypeStyleProps;
}

export const Container = styled(TouchableOpacity)`
  ${({ theme }) => css`
    width: 56px;
    height: 56px;
    justify-content: center;
    align-items: center;

    margin-left: 12px;
  `}
`;

export const Icon = styled(MaterialIcons).attrs<ContainerProps>(
  ({ theme, type }) => ({
    size: 24,
    color: type === "primary" ? theme.colors.green_700 : theme.colors.red,
  })
)`
  ${({ theme }) => css``}
`;
