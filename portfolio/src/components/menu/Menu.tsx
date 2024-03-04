import React from "react";
import styled from 'styled-components';
import { Hashtag } from "../hashtag/Hashtag";
import { theme } from "../../styles/Theme";

export const Menu = () => {
  return (
    <StyledMenu>
        <ul>
          <li>
            
              <Link href="/"><Hashtag>#</Hashtag>home</Link>
              </li>
          <li>
              <Link href="/about"><Hashtag>#</Hashtag>works</Link>
              </li>
          <li>
              <Link href="/contact"><Hashtag>#</Hashtag>about-me</Link>
              </li>
          <li>
              <Link href="/contact"><Hashtag>#</Hashtag>contacts</Link>
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
const Link = styled.a`
  display: inline-block;
  
  &:hover {
    color: ${theme.colors.accentWhite};
  }

  &:active {
    color: ${theme.colors.accentWhite};
    font-weight: 500;
  }
  
`

