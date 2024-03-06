import styled from 'styled-components';
import { theme } from '../styles/Theme';


export const Button = styled.button`
  display: inline-block;
  padding: 8px 16px;
  background-color: transparent;
  color: ${theme.colors.accentWhite};
  border: 1px solid ${theme.colors.accentGreen};
  font-weight: 500;
  cursor: pointer;

  &:hover {
    /* background-color: #00f32d80; */
    color: ${theme.colors.accentWhite};
    box-shadow: 0 0 -10px ${theme.colors.accentGreen};
  }

  &:active {
      background-color: #00f32d80;
      color: ${theme.colors.accentWhite};
    }
`

