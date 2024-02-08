import React from "react";
import styled from 'styled-components';
import { Logo } from "../../components/logo/Logo";
import { Menu } from "../../components/menu/Menu";
import { FlexWrapper } from "../../components/FlexWrapper";

export const Header = () => {
  return (
    <FlexWrapper>
       <StyledHeader>
      <Logo />
      <Menu />
    </StyledHeader>
    </FlexWrapper>
  );
};


const StyledHeader = styled.header`
  width: 100%;
  height: 100px;
  background-color: #07643b;
  color: #fff;

`;