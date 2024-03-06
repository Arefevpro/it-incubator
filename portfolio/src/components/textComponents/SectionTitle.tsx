import React from 'react';
import styled from 'styled-components';
import { theme } from '../../styles/Theme';
import { Hashtag } from '../hashtag/Hashtag';



export const SectionTitle = () => {
  return (
    <Hashtag />
  );
};

const Title = styled.h2`
  font-size: 32px;
  font-weight: 700;
  color: ${theme.colors.accentWhite};
`
