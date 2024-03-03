import React from "react";
import styled from 'styled-components';
import { Logo } from "../../components/logo/Logo";
import { Menu } from "../../components/menu/Menu";
import { FlexWrapper } from "../../components/flex/FlexWrapper";
import { Container } from "../../components/slider/Container";

export const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <FlexWrapper justify="flex-start">
          <Logo />
          <StyledHeaderLogoName>Elias</StyledHeaderLogoName>
        </FlexWrapper>
        <Menu />
      </Container>
    </StyledHeader>
  );
};


const StyledHeader = styled.header`
  width: 100%;
`;

const StyledHeaderLogoName = styled.span`

`;
