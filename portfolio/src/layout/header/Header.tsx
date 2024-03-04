import React from "react";
import styled from 'styled-components';
import { Logo } from "../../components/logo/Logo";
import { Menu } from "../../components/menu/Menu";
import { FlexWrapper } from "../../components/flex/FlexWrapper";
import { Container } from "../../components/slider/Container";
import { theme } from "../../styles/Theme";

export const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <FlexWrapper justify="flex-start">
          <Logo />
        </FlexWrapper>
        <Menu />
      </Container>
    </StyledHeader>
  );
};


const StyledHeader = styled.header`
  width: 100%;
`;
