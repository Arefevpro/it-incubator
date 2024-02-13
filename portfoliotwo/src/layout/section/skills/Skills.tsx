import React from 'react';
import styled from "styled-components"
import { FlexWrapper } from '../../../components/Flexwrapper';
import { SectionTitle } from '../../../components/SectionTitle';


export const Skills = () => {
  return (
    <StyledSkills>
      <SectionTitle>My Skills</SectionTitle>
      <FlexWrapper>
        
      </FlexWrapper>
    </StyledSkills>
  );
};

const StyledSkills = styled.section`
  background-color: #3d9ea3;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
