import React from "react";
import styled from 'styled-components';
import { Logo } from "../../components/logo/Logo";

export const Header = () => {
  return (
    <StyledHeader>
      <Logo />
        <nav>
          <ul>
            <li>
              <a href="/">#home</a>
              </li>
            <li>
              <a href="/about">#works</a>
              </li>
            <li>
              <a href="/contact">#about-me</a>
              </li>
            <li>
              <a href="/contact">#contacts</a>
              </li>
          </ul>
        </nav>
    </StyledHeader>
  );
};


const StyledHeader = styled.header`
  width: 100%;
  height: 100px;
  background-color: #07643b;
  color: #fff;

`;