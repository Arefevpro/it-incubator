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
      <SkillCard list='TypeScript' name='TypeScript' description='TypeScript'/>
      <SkillCard list='TypeScript' name='TypeScript' description='TypeScript'/>
      <SkillCard list='TypeScript' name='TypeScript' description='TypeScript'/>
      <SkillCard list='TypeScript' name='TypeScript' description='TypeScript'/>
      <SkillCard list='TypeScript' name='TypeScript' description='TypeScript'/>
      <SkillCard list='TypeScript' name='TypeScript' description='TypeScript'/>
      <SkillCard list='TypeScript' name='TypeScript' description='TypeScript'/>
      </SmallProjectsWrapper>
      
    </Container>
  );
};


const SmallProjectsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  padding: 16px;
  `