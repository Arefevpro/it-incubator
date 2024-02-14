import React from 'react';
import styled from "styled-components"
import { FlexWrapper } from '../../../components/Flexwrapper';
import { SectionTitle } from '../../../components/SectionTitle';
import { Skill } from '../../../layout/section/skills/skill/Skill';



export const Skills = () => {
  return (
    <StyledSkills>
      <SectionTitle>My Skills</SectionTitle>
      <FlexWrapper>
        <Skill iconId={'codeSvg'} title='React'/>
        <Skill iconId={'css3Svg'} title='CSS3'/>
        <Skill iconId={'reactSvg'}  title='React'/>
      </FlexWrapper>
    </StyledSkills>
  );
};

const StyledSkills = styled.section`
  background-color: #3d9ea3;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 100vh;
`
