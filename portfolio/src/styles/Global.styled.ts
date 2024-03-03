import { createGlobalStyle } from 'styled-components';
import { theme } from './Theme';


export const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  margin: 0;
  font-family: "Fira Code", monospace, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  line-height: 1.2;
  color: #ABB2BF;
  font-size: 16px;
  background-color: ${theme.colors.bgColorDark};
;
}

ul {
  list-style: none;
}

a {
  text-decoration: none;
  cursor: pointer;
}



`