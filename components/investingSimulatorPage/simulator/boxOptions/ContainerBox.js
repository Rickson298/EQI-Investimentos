import styled from "styled-components";

export const ContainerBox = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  @media (max-width: 1420px) {
    justify-content: start;
    gap: 15px;
  }

  @media (max-width: 600px) {
    gap: 5px;
  }
`;
