import React from "react";
import styled from 'styled-components';
import { FlexWrapper } from "../../../../components/flex/FlexWrapper";
import { DotsDecor } from "../../../../components/svg/SvgDecor";
import { HashtagDecor } from "../../../../components/hashtag/Hashtag";
import { SectionTitle } from "../../../../components/textComponents/SectionTitle";
import { SkillsName } from "../../../../layout/home/sections/skills/skill/SkillsName";


export const SkillsSection = ( ) => {
 return (
  <div>
  <GlobalStyledSection>
   <SectionTitle><HashtagDecor fontSize="32px" >#</HashtagDecor>skills</SectionTitle>
   <DotsDecor ></DotsDecor>
   <FlexWrapper>
     <SkillsName>Languages</SkillsName>
   </FlexWrapper>
  </GlobalStyledSection>
  <LogoDecor></LogoDecor>
</div>
 )
};



const GlobalStyledSection = styled.section`
  background-color: #2c2968;
  width: 100%;
  height: 365px;
`