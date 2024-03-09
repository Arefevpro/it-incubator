import React from 'react';
import styled from 'styled-components';
import { Project } from './project/Project';

export const Projects = () => {
  return (
    <ProjectsWrapper>
      <Project />
    </ProjectsWrapper>
  );
};


const ProjectsWrapper = styled.div`
  display: flex;
  gap: 16px;
  height: 100vh;
`;
