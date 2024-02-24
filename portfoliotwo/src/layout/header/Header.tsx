import React from "react";
import styled from "styled-components"
import { Logo } from "../../components/logo/Logo"
import { Menu } from "../../components/menu/Menu"
import { Container } from "../../components/slider/Container"


const items = ["Home", "Skills", "Works", "Testimony", "Contact"]

export const Header = () => {
  return (
    <Container>
    <Logo />
      <Menu menuItems={items}/>
    </Container>
  );
}


const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
