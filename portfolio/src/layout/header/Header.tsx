import React from "react";
import styled from 'styled-components';
import { Logo } from "../../components/logo/Logo";
import { Menu } from "../../components/menu/Menu";
import { FlexWrapper } from "../../components/FlexWrapper";

export const Header = () => {
  return (
       <StyledHeader>
      <FlexWrapper justify="space-between">
      <Logo />
      <Menu />
      </FlexWrapper>
    </StyledHeader>
    
  );
};


const StyledHeader = styled.header`
  width: 100%;
  background-color: #07643b;
`;