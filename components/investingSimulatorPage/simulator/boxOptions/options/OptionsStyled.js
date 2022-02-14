import styled from "styled-components";

export const OptionStyled = styled.button`
  outline: none;
  height: 50px;
  width: ${({ width }) => width || "100px"};
  border: 1px solid black;
  border-right: ${({ borderRight }) => borderRight};
  border-radius: ${({ borderRadius }) => borderRadius};
  transition: all ease 0.2s;
  cursor: pointer;
  background: ${({ background }) => background};
  color: ${({ color }) => color};
  margin-top: 10px;
  display: flex;
  justify-content: center;
  gap: 2px;
  align-items: center;
`;
