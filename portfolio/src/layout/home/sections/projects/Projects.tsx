import React from 'react';
import styled from 'styled-components';
import { ProjectOne } from './project/ProjectOne';
import { ProjectTwo } from './project/ProjectTwo';
import { ProjectThre } from './project/ProjectThre';

export const Projects = () => {
  return (
    <ProjectsWrapper>
      <ProjectOne />
      <ProjectTwo />
      <ProjectThre />
    </ProjectsWrapper>
  );
};


const ProjectsWrapper = styled.div`
  display: flex;
  gap: 16px;
  height: 100vh;
`;
