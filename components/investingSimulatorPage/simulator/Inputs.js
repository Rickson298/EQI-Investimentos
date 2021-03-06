import styled from "styled-components";

export const Inputs = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;

  @media (max-width: 1420px) {
    gap: 25px;
    justify-content: start;
  }
`;
