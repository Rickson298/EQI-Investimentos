import { useState } from "react";
import styled from "styled-components";
import { Input } from "../../Input";
import { Label } from "../../Label";

export const ContainerInput = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
  position: relative;
  z-index: 2;
`;

export const InvalidMessage = styled.small`
  color: red;
`;

export function InputSimulation({
  label,
  setState,
  message,
  onChange = () => {},
  ...rest
}) {
  const [isValid, setIsValid] = useState(true);
  return (
    <>
      <ContainerInput>
        <Label isInvalid={!isValid}>{label}</Label>
        <Input
          onChange={({ target: { value } } = e) => {
            value && setIsValid(!isNaN(value));
            onChange(value);
          }}
          {...rest}
        />
        {!isValid && <InvalidMessage>{message}</InvalidMessage>}
      </ContainerInput>
    </>
  );
}
