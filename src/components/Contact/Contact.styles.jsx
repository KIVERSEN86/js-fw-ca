import styled from "styled-components";
import { DefaultButton } from "../Layout/Layout.styles";

export const Form = styled.form`
  text-align: center;
`;

export const Input = styled.input`
  border-radius: 5px;
  width: 350px;
  height: 40px;
`;

export const Textarea = styled.textarea`
  border-radius: 5px;
  width: 350px;
  min-height: 100px;
`;

export const Button = styled(DefaultButton)`
  max-width: 350px;
  border-radius: 10px;
`;
