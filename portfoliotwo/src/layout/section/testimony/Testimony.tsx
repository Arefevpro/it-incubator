import React from 'react';
import styled from "styled-components"
import { SectionTitle } from '../../../components/SectionTitle';
import { Icon } from '../../../components/icon/Icon';


export const Testimony = () => {
  return (
    <StyledTestimony>
      <SectionTitle>Testimony</SectionTitle>
      <Icon iconId={'quoteSvg'}/>
    </StyledTestimony>
  );
};


const StyledTestimony = styled.section`
  
`