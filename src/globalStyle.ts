import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding:0;
  }
  body {
    font-family: 'Roboto', sans-serif;
    background-color: #9c89B8;
    color: #ffff;
  }
`;