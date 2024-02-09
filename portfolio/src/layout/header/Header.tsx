import React from "react";
import styled from 'styled-components';
import { Logo } from "../../components/logo/Logo";
import { Menu } from "../../components/menu/Menu";
import { FlexWrapper } from "../../components/flex/FlexWrapper";

export const Header = () => {
  return (
    <FlexWrapper>
       <StyledHeader>
      <FlexWrapper justify="flex-start">
      <Logo />
      <StyledHeaderLogoName>Elias</StyledHeaderLogoName>
      </FlexWrapper>
      <Menu />
    </StyledHeader>
    </FlexWrapper>
  );
};


const StyledHeader = styled.header`
  width: 100%;
  height: 61px;
  background-color: #07643b;
  color: #ABB2BF;
`;

const StyledHeaderLogoName = styled.span`
  display: flex;
  gap: 8px;
  color: #FFFFFF;
  font-size: 16px;
`;
