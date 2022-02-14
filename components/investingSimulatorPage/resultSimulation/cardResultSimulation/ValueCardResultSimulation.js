import styled from "styled-components";

export const ValueCardResultSimulation = styled.span`
  text-align: center;
  color: ${({ finalValue, profit }) => (finalValue || profit) && "green"};
`;
