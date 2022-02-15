import styled from "styled-components";

export const Cards = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 45px;
  transition: all ease 0.2s;
  color: ${({ theresData }) => (!theresData ? "lightGray" : "black")};
`;
