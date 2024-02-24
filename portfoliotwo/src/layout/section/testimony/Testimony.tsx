import React from 'react';
import styled from "styled-components"
import { SectionTitle } from '../../../components/SectionTitle';
import { Icon } from '../../../components/icon/Icon';
import { Slider } from '../../../components/slider/Slider';
import { FlexWrapper } from '../../../components/Flexwrapper';


export const Testimony = () => {
  return (
    <StyledTestimony>
      <SectionTitle>Testimony</SectionTitle>
      <FlexWrapper direction={"column" } alignItems={"center"}>
      <Icon iconId={'quoteSvg'}/>
      <Slider />
      </FlexWrapper>
    </StyledTestimony>
  );
};


const StyledTestimony = styled.section`
  min-height: 40vh;
`