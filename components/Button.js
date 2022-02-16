import styled from "styled-components";

export const Button = styled.button`
  border: ${({ border }) => border};
  outline: none;
  position: relative;
  background: ${({ background }) => background};
  width: 49%;
  height: 50px;
  border-radius: 10px;
  font-size: 18px;
  font-weight: 700;
  transition: all ease 0.2s;
  cursor: pointer;
  @media (max-width: 1410px) {
    width: 250px;
  }

  @media (max-width: 550px) {
    width: 150px;
    font-size: 14px;
  }
  &:hover {
    box-shadow: 1px 1px 10px 1px gray;
    border: 1px solid gray;
  }
`;
