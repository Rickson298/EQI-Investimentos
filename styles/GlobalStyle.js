import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

body {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
  font-family: BlinkMacSystemFont, sans-serif;
  * {
    box-sizing: border-box;
  }
}

html {
  margin: 0;
  padding: 0;
}

* {
    box-sizing: border-box;
  } 

::-webkit-scrollbar-thumb {
  background-color: gray;
  border-radius: 15px;
  border: 1px solid black;
  transition: all 0.2s linear;
}


::-webkit-scrollbar {
  width: 10px;
  background-color: black;
}

::-webkit-scrollbar-track {
  border-radius:30px;
  background-color: black;
}
`;

export default GlobalStyle;
