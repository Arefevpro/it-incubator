import React from 'react';
import styled from "styled-components"
import { Menu } from '../../../components/menu/Menu';
import { SectionTitle } from '../../../components/SectionTitle';
import { FlexWrapper } from '../../../components/Flexwrapper';

const worksItems = ["All", "landing page", "React", "spa"]

export const Works = () => {
  return (
    <StyledWorks>
      <SectionTitle>My Works</SectionTitle>
      <Menu menuItems={worksItems}/>
      <FlexWrapper>
        
      </FlexWrapper>
    </StyledWorks>
  );
};

const StyledWorks = styled.section `
  min-height: 40vh;
  background-color: #a6c9cc;
`