import styled from "styled-components";

export const Loader = styled.div`
  border: 4px solid #f3f3f3;
  border-top: 4px solid gray;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  position: absolute;
  animation: spin 0.5s ease-out infinite;
  right: 10px;
  top: 20%;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
