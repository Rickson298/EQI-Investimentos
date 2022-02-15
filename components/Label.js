import styled from "styled-components";
export const Label = styled.label`
  font-size: 14px;
  margin-bottom: 10px;
  padding: 2px;
  color: ${({ isInvalid }) => isInvalid && "red"};
`;
