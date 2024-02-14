import React from 'react';
import styled from "styled-components"
import { Menu } from '../../../components/menu/Menu';
import { SectionTitle } from '../../../components/SectionTitle';
import { FlexWrapper } from '../../../components/Flexwrapper';
import { Work } from './work/Work';


const worksItems = ["All", "landing page", "React", "spa"]

export const Works = () => {
  return (
    <StyledWorks>
      <SectionTitle>My Works</SectionTitle>
      <Menu menuItems={worksItems}/>
      <FlexWrapper>
        <Work />
        <Work />
      </FlexWrapper>
    </StyledWorks>
  );
};

const StyledWorks = styled.section `
  min-height: 40vh;
  background-color: #a6c9cc;
`