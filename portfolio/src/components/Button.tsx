import styled from 'styled-components';
import { theme } from '../styles/Theme';


export const Button = styled.button`
  display: inline-block;
  font-family: "Fira Code", monospace;
  padding: 8px 16px;
  background-color: transparent;
  color: ${theme.colors.accentWhite};
  border: 1px solid ${theme.colors.accentGreen};
  font-weight: 500;
  line-height: 21px;
  cursor: pointer;

  &:hover {
    color: ${theme.colors.accentWhite};
    outline: 2px solid ${theme.colors.accentGreen};
  }

  &:active {
      background-color: #00f32d90;
    }
`

