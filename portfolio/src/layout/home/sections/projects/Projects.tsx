import React from 'react';
import styled from 'styled-components';
import { Container } from '../../../../components/slider/Container';
import {  Project } from './project/Project';




export const Projects = () => {
  return (
    <Container>
      <ProjectsWrapper>
        <Project />
        <Project />
        <Project />
      </ProjectsWrapper>
    </Container>
  );
};


const ProjectsWrapper = styled.div`
  display: flex;
  height: 100vh;
`