import React from 'react';
import styled from "styled-components"
import { theme } from '../../../../styles/Theme';



export const TabMenu = (props:  {menuItems: Array<string>} ) => {
  return (
    <StyledTabMenu>
        <ul>
          {props.menuItems.map((item: string, index: number) => {
            return <li key={index}>
              <Link href="#">{item}</Link>
            </li>
          })}
        </ul>
      </StyledTabMenu>
  );
};




const listItem =styled.li`
  position: relative;
  
`


const StyledTabMenu = styled.nav`
  ul {
    list-style: none;
    display: flex;
    gap: 30px;
    padding: 0;
    margin: 0;
    justify-content: center;
  }
`

const Link =styled.a`
  font-weight: 400;
  font-size: 14px;
  letter-spacing: 1px;
  text-transform: uppercase;
  padding: 10px;
  

  &::before {
    content: "";
    display: inline-block;
    height: 10px;
    background-color: ${theme.colors.accent};

    position: absolute;
    bottom: 0;
    left: -10px;
    right: -10p;
  }
`