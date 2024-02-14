import React from 'react';
import styled from "styled-components"
import { Menu } from '../../../components/menu/Menu';
import { SectionTitle } from '../../../components/SectionTitle';
import { FlexWrapper } from '../../../components/Flexwrapper';
import { Work } from './work/Work';
import timerImg from '../../../assets/images/0c92c8a2d9105549989393fee63d52d5.webp';
import socialImg from '../../../assets/images/0f6c9eae25a0122b383d52e1e9a7182e.webp';


const worksItems = ["All", "landing page", "React", "spa"]

export const Works = () => {
  return (
    <StyledWorks>
      <SectionTitle>My Works</SectionTitle>
      <Menu menuItems={worksItems}/>
      <FlexWrapper justifyContent='space-around'>
        <Work title={"Social Network"}
              text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit."}
              src={socialImg}/>
        <Work title={"Timer"}
              text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enim"}
              src={timerImg}/>
      </FlexWrapper>
    </StyledWorks>
  );
};

const StyledWorks = styled.section `
  min-height: 40vh;
  background-color: #a6c9cc;
`