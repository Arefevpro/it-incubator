import React from 'react';
import styled from 'styled-components';
import { theme } from '../../styles/Theme';
import { Container } from '../slider/Container';
import { Twitter } from'../media/Twitter';
import { SectionTitle } from '../textComponents/SectionTitle';

export const AllMedia = () => {
  return (
    <Container>
      <AllMediaWrapper>
        <SectionTitle title={"All Media"} />
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
