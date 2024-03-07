import React from 'react';
import styled from 'styled-components';
import { SectionTitle } from '../../../../components/textComponents/SectionTitle';
import { Container } from '../../../../components/slider/Container';
import { Hashtag } from '../../../../components/hashtag/Hashtag';




export const Projects = () => {
  return (
    <Container>
      <ProjectsWrapper>
      </ProjectsWrapper>
    </Container>
  );
};


const ProjectsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`