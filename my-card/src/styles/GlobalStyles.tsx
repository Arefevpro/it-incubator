import { createGlobalStyle } from 'styled-components';



export const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    *,
    *::before,
    *::after {
    box-sizing: border-box;
    }
    color: white;
    background-color: #252527; // Чтобы глазки не болели )
  }
`
