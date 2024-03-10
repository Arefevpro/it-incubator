import React from "react";
import styled from 'styled-components';
import { theme } from "../../styles/Theme";
import { Hashtag } from '../hashtag/Hashtag';

export const Menu = () => {
  return (
    <StyledMenu>
        <ul>
          <li>
            
              <Link href="/"><Hashtag name="#" width="16px" />home</Link>
              </li>
          <li>
              <Link href="/about"><Hashtag name="#" width={"16px"}/>works</Link>
              </li>
          <li>
              <Link href="/contact"><Hashtag name="#" width={"16px"}/>about-me</Link>
              </li>
          <li>
              <Link href="/contact"><Hashtag name="#" width={"16px"}/>contacts</Link>
          </li>
        </ul>
    </StyledMenu>
  );
};


const StyledMenu = styled.nav`
  ul {
    display: flex;
    gap: 32px;
    justify-content: center;
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

