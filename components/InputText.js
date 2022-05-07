import { TextInput } from "react-native";
import styled from "styled-components";

const InputText = styled(TextInput).attrs({
  placeholderTextColor: "#FFFF",
  autoCapitalize: "none",
})`
  border-width: 1px;
  border-color: ${(props) => props.theme.colors.white[100]};
  height: 48px;
  margin-left: 32px;
  margin-right: 32px;
  border-radius: 24px;
  padding: 15px;
  color: ${(props) => props.theme.colors.white[100]};
  font-family: ${(props) => props.theme.fonts[400]};
`;

export default InputText;
