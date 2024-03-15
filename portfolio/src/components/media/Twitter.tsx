import React from 'react';
import styled from 'styled-components';
import {  theme } from '../../styles/Theme';
import { Container } from '../slider/Container';
import { Icon } from '../icon/Icon';

export const Twitter = () => {
  return (
    <Container>
      <Icon iconId={"logoUnion"} />
      <LogoName>Elias</LogoName>
    </Container>
  );
};


const LogoName = styled.a`
  font-weight: 700;
  padding-left: 8px;
  color: ${theme.colors.accentWhite};
`