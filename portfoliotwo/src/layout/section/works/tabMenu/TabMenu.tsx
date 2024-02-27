import React from 'react';
import styled from "styled-components"
import { theme } from '../../../../styles/Theme';



export const TabMenu = (props: { menuItems: Array<string> }) => {
  return (
    <StyledTabMenu>
      <ul>
        {props.menuItems.map((item: string, index: number) => {
          return (
            <ListItem key={index}>
              <Link href="#">{item}</Link>
            </ListItem>
          );
        })}
      </ul>
    </StyledTabMenu>
  );
};

const StyledTabMenu = styled.nav`
margin-bottom: 40px;
  ul {
    display: flex;
    gap: 20px;
    justify-content: center;
  }
`;

const ListItem = styled.li`
  position: relative;
  z-index: 1;
`;

const Link = styled.a`
  font-weight: 400;
  font-size: 14px;
  letter-spacing: 1px;
  text-transform: uppercase;
  padding: 10px;
  

  &:hover {
    &::before {
      height: 10px;
    }
  }


  &::before {
    content: "";
    display: inline-block;
    background-color: ${theme.colors.accent};

    position: absolute;
    bottom: -6px;
    left: 0;
    right: 0;
    z-index: -1;
  }
`;
