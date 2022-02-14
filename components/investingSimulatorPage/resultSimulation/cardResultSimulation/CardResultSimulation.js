import styled from "styled-components";
import { LabelCardResultSimulation } from "./LabelCardResultSimulation";
import { ValueCardResultSimulation } from "./ValueCardResultSimulation";

const CardResultSimulationStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 5px;
  box-shadow: 1px 0px 10px 2px #ccc;
  align-content: center;
  width: 210px;
  height: 80px;
`;

export function CardResultSimulation({ label, valueCard, ...rest }) {
  return (
    <CardResultSimulationStyled>
      <LabelCardResultSimulation>{label}</LabelCardResultSimulation>
      <ValueCardResultSimulation {...rest}>
        {valueCard}
      </ValueCardResultSimulation>
    </CardResultSimulationStyled>
  );
}
