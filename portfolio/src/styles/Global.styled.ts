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
`