import React from 'react';
import styled from 'styled-components';
import { ProjectOne } from './project/ProjectOne';
import { ProjectTwo } from './project/ProjectTwo';
import { ProjectThre } from './project/ProjectThre';
import { Container } from '../../../../components/slider/Container';

export const Projects = () => {
  return (
    <Container>
      <ProjectsWrapper>
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
