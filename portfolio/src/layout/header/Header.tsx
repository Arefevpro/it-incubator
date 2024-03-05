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
    <Container>
      <StyledHeader>
        <Logo />
        <FlexWrapper justify="flex-end" gap="32px">
          <Menu />
          <Language />
        </FlexWrapper>
      </StyledHeader>
    </Container>
  );
};


const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 32px 0 8px;
  align-items: center;
  width: 100%;
  margin-bottom: 32px;
`;
