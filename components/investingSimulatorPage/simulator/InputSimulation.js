import styled from "styled-components";
import { Input } from "../../Input";
import { Label } from "../../Label";

export function InputSimulation({ label, onChange, value, readOnly }) {
  const ContainerInput = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 40px;
    position: relative;
  `;

  return (
    <ContainerInput>
      <Label>{label}</Label>
      <Input readOnly={readOnly} onChange={onChange} value={value} />
    </ContainerInput>
  );
}
