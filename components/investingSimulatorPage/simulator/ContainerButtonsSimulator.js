import styled from "styled-components";

export const ContainerButtonsSimulator = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  @media (max-width: 1400px) {
    gap: 15px;
    justify-content: start;
  }
`;
