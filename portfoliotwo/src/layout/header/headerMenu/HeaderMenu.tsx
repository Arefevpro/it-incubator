import React from 'react';
import styled from "styled-components"


export const HeaderMenu = (props:  {menuItems: Array<string>} ) => {
  return (
    <StyledHeaderMenu>
      <ul>
        {props.menuItems.map((item: string, index: number) => {
          return (
            <ListItem key={index}>
              <Link href="#">
                {item}
                <Mask>
                  <span>{item}</span>
                </Mask>
                <Mask>
                  <span>{item}</span>
                </Mask>
              </Link>
            </ListItem>
          );
        })}
      </ul>
    </StyledHeaderMenu>
  );
};


const StyledHeaderMenu = styled.nav`
  ul {
    display: flex;
    gap: 30px;
    justify-content: center;
  }
`
const ListItem = styled.li`

`

const Link = styled.a`
  font-family: 'Josefin Sans', sans-serif;
  font-size: 30px;
  font-weight: 400;
  line-height: 55px;
  text-align: center;
  color: rgba(117, 114, 213, 1);
;
`

const Mask = styled.span`

  `