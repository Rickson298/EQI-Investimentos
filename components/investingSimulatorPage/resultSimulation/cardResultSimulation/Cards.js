import styled from "styled-components";

export const Cards = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
  gap: 45px;
  transition: all ease 0.2s;
  color: ${({ theresData }) => (!theresData ? "lightGray" : "black")};

  @media (max-width: 750px) {
    gap: 30px;
  }
`;
