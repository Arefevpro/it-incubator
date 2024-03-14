import React from 'react';
import styled from 'styled-components';
import { theme } from '../../styles/Theme';
import { Button } from '../Button';
import { Container } from '../slider/Container';



export const PageTitle = () => {
  return (
    <Container>
      <ProjectsTitle></ProjectsTitle>
    </Container>
  );
};



const ProjectsTitle = styled.h3`
  font-size: 32px;
  color: ${theme.colors.accentWhite};

  &::before {
    content: "/";
    display: inline-block;
    color: ${theme.colors.accentGreen}
  }
`
