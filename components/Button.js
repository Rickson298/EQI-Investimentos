import styled from "styled-components";

export const Button = styled.button`
  border: ${({ border }) => border};
  outline: none;
  background: ${({ background }) => background};
  width: 49%;
  height: 50px;
  border-radius: 10px;
  font-size: 18px;
  font-weight: 700;
  transition: all ease 0.2s;
  cursor: pointer;
  &:hover {
    box-shadow: 1px 1px 10px 1px gray;
    border: 1px solid gray;
  }
`;
