import React from "react";
import styled from 'styled-components';
import { FlexWrapper } from "../../../../components/flex/FlexWrapper";
import { IconDecor } from "../../../../components/svg/Svg";


export const SkillsSection = ( ) => {
 return (
  <div>
  <StyledSkills>
   <SecrionTitle>skills</SecrionTitle>
   <IconDecor ></IconDecor>
   <FlexWrapper>
     <SkillsName>Languages</SkillsName>
     <SkillsStyled>TypeScript</SkillsStyled>
   </FlexWrapper>
 </StyledSkills>
</div>
 )
};



const StyledSkills = styled.section`
  display: flex;
`
const SecrionTitle = styled.h2`
  font-size: 24px;
  font-weight: 600;
  color: #ABB2BF;
`

const SkillsName = styled.h3`
  gap: 10px;
`

const SkillsStyled = styled.div`
  gap: 10px;
`
