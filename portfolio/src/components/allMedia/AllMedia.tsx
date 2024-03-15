import React from 'react';
import styled from 'styled-components';
import { theme } from '../../styles/Theme';
import { Container } from '../slider/Container';
import { Twitter } from'../media/Twitter';

export const AllMedia = () => {
  return (
    <Container>
      <AllMediaWrapper>
        <Twitter />
        <Twitter />
      </AllMediaWrapper>
    </Container>
  );
};


const AllMediaWrapper = styled.div`
  max-width: 1064px;
  width: 100%;
  min-height: 100%;
  padding: 0 20px;
  margin: 0 auto;
  /* outline: 1px solid ${theme.colors.accentGreen}; */
`;
