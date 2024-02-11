import React from "react";
import styled from 'styled-components';
import { FlexWrapper } from "../../../../components/flex/FlexWrapper";
import { DotsDecor } from "../../../../components/svg/SvgDecor";
import { HashtagDecor } from "../../../../components/hashtag/Hashtag";
import { SectionTitle } from "../../../../components/textComponents/SectionTitle";
import { SkillsName } from "../../../../layout/home/sections/skills/skill/SkillsName";
import { LogoDecor } from "../../../../components/svg/SvgDecor";
import { СubeDecor } from "../../../../components/svg/SvgDecor";
import { LineDecor } from "../../../../components/svg/SvgDecor";


export const SkillsSection = ( ) => {
 return (
  <div>
  <GlobalStyledSection>
   <FlexWrapper>
   <HashtagDecor fontSize="32px" >#</HashtagDecor>
   <SectionTitle >skills</SectionTitle>
   <LineDecor />
   </FlexWrapper>
   <FlexWrapper>
   <DotsDecor />
   <LogoDecor />
   <СubeDecor />
   <СubeDecor />
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