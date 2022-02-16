import styled from "styled-components";

export const Tooltip = styled.div`
  background: lightGray;
  position: absolute;
  top: 25px;
  transition: all ease 0.2s;
  border-radius: 10px;
  right: 0;
  height: auto;
  max-width: 400px;
  padding: 15px;
  color: gray;
  display: none;
  z-index: 999;
`;
