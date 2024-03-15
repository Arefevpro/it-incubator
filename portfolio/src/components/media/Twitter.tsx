import React from 'react';
import styled from 'styled-components';
import {  theme } from '../../styles/Theme';
import { Container } from '../slider/Container';
import { Icon } from '../icon/Icon';

export const Twitter = () => {
  return (
    <Container>
      <LogoWrapper>
      <Icon iconId={"twitter"}  width='32px' height='32px' viewbox='0 0 32 32'/>
      <LogoName>@elias</LogoName>
      </LogoWrapper>
    </Container>
  );
};

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`

const LogoName = styled.span`
  display: inline-block;
  color: ${theme.colors.accentWhite};
`;

