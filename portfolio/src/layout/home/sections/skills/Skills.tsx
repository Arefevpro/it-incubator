import React from "react";
import styled from 'styled-components';
import { FlexWrapper } from "../../../../components/flex/FlexWrapper";
import { HashtagDecor } from "../../../../components/hashtag/Hashtag";
import { SectionTitle } from "../../../../components/textComponents/SectionTitle";
import { SkillsName } from "../../../../layout/home/sections/skills/skill/SkillsName";


export const SkillsSection = ( ) => {
 return (
  <div>
  <GlobalStyledSection>
   <FlexWrapper width="391px" height="42px" color="#5b6a5d">
   <HashtagDecor fontSize="32px" >#</HashtagDecor>
   <SectionTitle >skills</SectionTitle>
   </FlexWrapper >
   <FlexWrapper width="349px" height="282px" color="#373642" margin="32px 12px 10px 29px" >
   </FlexWrapper>
   <FlexWrapper>
     <SkillsName>Languages</SkillsName>
   </FlexWrapper>
  </GlobalStyledSection>
</div>
 )
};



const GlobalStyledSection = styled.section`
  background-color: #2c2968;
  width: 100%;
  height: 365px;
`