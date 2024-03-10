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
        <Hashtag name="#" width="32px" />
        <SectionTitle title="Projects" />
        <ProjectOne />
        <ProjectTwo />
        <ProjectThre />
      </ProjectsWrapper>
    </Container>
  );
};


const ProjectsWrapper = styled.div`
  display: flex;
  gap: 16px;
  height: 100%;
  
`;
