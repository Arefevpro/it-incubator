import React from 'react';
import styled from 'styled-components';
import { ProjectOne } from './project/ProjectOne';
import { ProjectTwo } from './project/ProjectTwo';
import { ProjectThre } from './project/ProjectThre';
import { Container } from '../../../../components/slider/Container';
import { SectionTitle } from '../../../../components/textComponents/SectionTitle';
import { Hashtag } from '../../../../components/hashtag/Hashtag';

export const Projects = () => {
  return (
    <Container>
      <ProjectsWrapper>
        <TitleWrapper>
        <Hashtag name="#"/>
        <SectionTitle title="Projects" />
        </TitleWrapper>
        <ProjectWrapper>
        <ProjectOne />
        <ProjectTwo />
        <ProjectThre />
        </ProjectWrapper>
        
      </ProjectsWrapper>
    </Container>
  );
};


const ProjectsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  height: 100%;
  
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  `


const ProjectWrapper = styled.div`
  display: flex;
  gap: 16px;
  `