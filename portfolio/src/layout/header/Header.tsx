import React from "react";
import styled from 'styled-components';
import { Logo } from "../../components/logo/Logo";
import { Menu } from "../../components/menu/Menu";
import { FlexWrapper } from "../../components/flex/FlexWrapper";
import { Container } from "../../components/slider/Container";
import { theme } from "../../styles/Theme";
import { Language } from "../../components/Language";

export const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <Logo />
        <FlexWrapper justify="flex-end" gap="32px" padding="0" margin="0">
          <Menu />
          <Language />
        </FlexWrapper>
      </Container>
    </StyledHeader>
  );
};


const StyledHeader = styled.header`
  width: 100%;
  padding: 32px 0 8px;
`;
