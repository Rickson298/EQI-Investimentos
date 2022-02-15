import styled from "styled-components";

export const Tooltip = styled.div`
  background: lightGray;
  position: absolute;
  bottom: 30px;
  transition: all ease 0.2s;
  border-radius: 10px;
  right: 0;
  height: auto;
  width: 400px;
  padding: 15px;
  color: gray;
  opacity: 0;
  z-index: 1;
`;
