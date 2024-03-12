import React from 'react';
import styled from 'styled-components';
import { theme } from '../../styles/Theme';
import { Container } from '../../components/slider/Container';
import { SectionTitle } from '../../components/textComponents/SectionTitle';
import { Hashtag } from '../../components/hashtag/Hashtag';
import { Logo } from '../../components/logo/Logo';




export const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <Logo />
      </Container>
    </StyledFooter>
  );
};


const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  padding: 32px 0 8px;
  align-items: center;
  width: 100%;
  margin-bottom: 32px;
  color: ${theme.colors.colorGray};
  `