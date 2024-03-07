import React from 'react';
import styled from 'styled-components';
import { Container } from '../../../../components/slider/Container';
import {  Project } from './project/Project';




export const Projects = () => {
  return (
    <Container>
      <ProjectsWrapper>
        <Project cached img={Photo1} title='Title' text='Text' tags={['tag1', 'tag2', 'tag3']}/>
        <Project />
        <Project />
      </ProjectsWrapper>
    </Container>
  );
};


const ProjectsWrapper = styled.div`
  display: flex;
  gap: 16px;
  height: 100vh;
`