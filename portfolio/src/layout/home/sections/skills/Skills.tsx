import React from "react";
import styled from 'styled-components';
import { FlexWrapper } from "../../../../components/Flex/FlexWrapper";
import { IconDecor } from "../../../../components/svg/Svg";


export const Skills = ( ) => {
  <StyledSkills>
    <SecrionTitle>#skills</SecrionTitle>
    <IconDecor ></IconDecor>
    <FlexWrapper>
      <SkillsName>Languages</SkillsName>
      <SkillsStyledSkills>TypeScript
Lua
Python
Python
Python
JavaScript</SkillsStyledSkills>
    </FlexWrapper>
  </StyledSkills>
}



const StyledSkills = styled.section`
  
`
const SecrionTitle = styled.h2`
  font-size: 24px;
  font-weight: 600;
  color: #ABB2BF;
`

const SkillsName = styled.h3`
  gap: 10px;
`

const SkillsStyledSkills = styled.div`
  gap: 10px;
`
