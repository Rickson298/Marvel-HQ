import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

body {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
  font-family: 'Abeezee', BlinkMacSystemFont, sans-serif;
}

html {
  margin: 0;
  padding: 0;
}

* {
  box-sizing: border-box;
}

::-webkit-scrollbar-thumb {
  background-color: red;
  border-radius: 15px;
  border: 1px solid black;
  transition: all 0.2s linear;
}
::-webkit-scrollbar-thumb:hover {
  background-color: rgb(23, 64, 248);
}

::-webkit-scrollbar {
  width: 13px;
  background-color: black;
}

::-webkit-scrollbar-track {
  border-radius:30px;
  background-color: black;
}
`;

export default GlobalStyle;
