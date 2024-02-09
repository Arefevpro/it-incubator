import React from "react";
import styled from 'styled-components';
import { FlexWrapper } from "../../../../components/flex/FlexWrapper";
import { IconDecor } from "../../../../components/svg/SvgDecor";
import { HashtagDecor } from "../../../../components/hashtag/Hashtag";
import { SectionTitle } from "../../../../components/textComponents/SectionTitle";

export const SkillsSection = ( ) => {
 return (
  <div>
  <GlobalStyledSection>
  <StyledSkills>
   <SectionTitle><HashtagDecor fontSize="32px" >#</HashtagDecor>skills</SectionTitle>
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
 

`



const SkillsStyled = styled.div`
  gap: 10px;
`
const GlobalStyledSection = styled.section`
  background-color: #2c2968;
`