import React from "react";
import styled from 'styled-components';

export const Menu = () => {
  return (
    <StyledMenu>
        <ul>
          <li>
              <a href="/"><span>#</span>home</a>
              </li>
          <li>
              <a href="/about"><span>#</span>works</a>
              </li>
          <li>
              <a href="/contact"><span>#</span>about-me</a>
              </li>
          <li>
              <a href="/contact"><span>#</span>contacts</a>
          </li>
        </ul>
    </StyledMenu>
  );
};


const StyledMenu = styled.nav`
  ul {
    display: flex;
    gap: 32px;
  }

`

