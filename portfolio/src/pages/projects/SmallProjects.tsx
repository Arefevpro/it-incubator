import React from 'react';
import styled from 'styled-components';
import { Container } from '../../components/slider/Container';
import { SectionTitle } from '../../components/textComponents/SectionTitle';
import { Hashtag } from '../../components/hashtag/Hashtag';
import { theme } from '../../styles/Theme';
import { SkillCard } from '../../components/skillsCard/SkillCard';




export const SmallProjects = () => {
  return (
    <Container>
      <SmallProjectsWrapper>
      <SkillCard list='TypeScript' name='TypeScript' description='TypeScript'/>
      </SmallProjectsWrapper>
      
    </Container>
  );
};


const SmallProjectsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
  gap: 32px;
  padding-bottom: 145px;
  `