import React from 'react';
import styled from "styled-components"
import { SectionTitle } from '../../../components/SectionTitle';
import { Icon } from '../../../components/icon/Icon';
import { Slider } from '../../../components/slider/Slider';
import { FlexWrapper } from '../../../components/Flexwrapper';
import { IconWrapper } from '../skills/skill/Skill'; 


export const Testimony = () => {
  return (
    <StyledTestimony>
      <SectionTitle>Testimony</SectionTitle>
      <FlexWrapper direction={"column"} alignItems={"center"}>
        <IconWrapper>
          <Icon iconId={"quoteSvg"} />
        </IconWrapper>
        <Slider />
      </FlexWrapper>
    </StyledTestimony>
  );
};


const StyledTestimony = styled.section`
  min-height: 40vh;

  ${IconWrapper} {
    margin: 92px 72px;
  }
`