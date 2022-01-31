import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    overflow-x:hidden;
  };
  
  html {
    margin: 0;
    padding: 0;
    font-family:'helvetica';
  }

  *{
    box-sizing: border-box;
  }
`;

export default GlobalStyle;
