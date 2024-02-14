import React from "react";
import styled from "styled-components"
import { Logo } from "../../components/logo/Logo"
import { Menu } from "../../components/menu/Menu"


export const Header = () => {
  return (
    <StyledHeader>
      <Logo />
      <Menu />
    </StyledHeader> 
  );
}


const StyledHeader = styled.header`
  background-color: #a6c9cc;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  box-sizing: border-box;
  border: #ed0ce2 2px solid;
`
