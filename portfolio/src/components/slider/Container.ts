import styled from 'styled-components';
import { theme } from '../../styles/Theme';

export const Container = styled.div`
  max-width: 1064px;
  width: 100%;
  min-height: 100%;
  padding: 0 20px;
  margin: 0 auto;
  outline: 1px solid ${theme.colors.accentGreen};
`;