import React from 'react';
import styled from "styled-components"
import { Menu } from '../../../components/menu/Menu';
import { SectionTitle } from '../../../components/SectionTitle';
import { FlexWrapper } from '../../../components/Flexwrapper';
import { Work } from './work/Work';


const worksItems = ["All", "landing page", "React", "spa"]

export const Works = () => {
  return (
    <StyledWorks>
      <SectionTitle>My Works</SectionTitle>
      <Menu menuItems={worksItems}/>
      <FlexWrapper>
        <Work title={"Social Network"}
              text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit."}
              src={"https://picsum.photos/200/300"}/>
        <Work title={"Timer"}
              text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enim"}
              src={"https://picsum.photos/200/300"}/>
      </FlexWrapper>
    </StyledWorks>
  );
};

const StyledWorks = styled.section `
  min-height: 40vh;
  background-color: #a6c9cc;
`