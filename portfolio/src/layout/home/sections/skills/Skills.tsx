import React from "react";
import styled from 'styled-components';
import { FlexWrapper } from "../../../../components/flex/FlexWrapper";
import { IconDecor } from "../../../../components/svg/SvgDecor";
import { HashtagDecor } from "../../../../components/hashtag/Hashtag";

export const SkillsSection = ( ) => {
 return (
  <div>
  <GlobalStyledSection>
  <StyledSkills>
   <SecrionTitle><HashtagDecor fontSize="32px" >#</HashtagDecor>skills</SecrionTitle>
   <IconDecor ></IconDecor>
   <FlexWrapper>
     <SkillsName>Languages</SkillsName>
     <SkillsStyled>TypeScript</SkillsStyled>
   </FlexWrapper>
 </StyledSkills>
  </GlobalStyledSection>
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
const GlobalStyledSection = styled.section`
  background-color: #2c2968;
`