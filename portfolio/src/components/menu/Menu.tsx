import React from "react";
import styled from 'styled-components';

export const Menu = () => {
  return (
    <StyledMenu>
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
    </StyledMenu>
  );
};


const StyledMenu = styled.nav`
  ul {
    display: flex;
    gap: 32px;
    list-style: none;
  }
`

