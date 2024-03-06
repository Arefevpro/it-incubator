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
    background-color: ${theme.colors.accentGreen};
    color: ${theme.colors.accentWhite};
  }
`