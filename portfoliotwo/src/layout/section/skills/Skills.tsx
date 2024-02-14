import React from 'react';
import styled from "styled-components"
import { FlexWrapper } from '../../../components/Flexwrapper';
import { SectionTitle } from '../../../components/SectionTitle';
import { Skill } from '../../../layout/section/skills/skill/Skill';



export const Skills = () => {
  return (
    <StyledSkills>
      <SectionTitle>My Skills</SectionTitle>
      <FlexWrapper wrap='wrap'>
        <Skill  iconId={'codeSvg'} 
                title={'React'} 
                description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'}/>
        <Skill  iconId={'css3Svg'} 
                title={'CSS3'}  description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'}/>
        <Skill  iconId={'reactSvg'} 
                title={'React'} 
                description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'}/>
        <Skill  iconId={'typeScriptSvg'} 
                title={'TypeScript'} 
                description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'}/>
        <Skill  iconId={'styledCompSvg'} 
                title={'styled components'} 
                description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'}/>
        <Skill  iconId={'figmaSvg'} 
                title={'WEB DESIgN'} 
                description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'}/>
      </FlexWrapper>
    </StyledSkills>
  );
};

const StyledSkills = styled.section`
box-sizing: border-box;
border: #ed0ce2 2px solid;
background-color: #a6c9cc;
display: flex;
justify-content: space-between;
align-items: center;
min-height: 40vh;
`
