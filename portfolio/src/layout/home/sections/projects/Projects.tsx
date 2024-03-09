import React from 'react';
import styled from 'styled-components';
import { Container } from '../../../../components/slider/Container';
import {  Project } from './project/Project';




export const Projects = () => {
  return (
    <Container>
      <ProjectsWrapper>
        <Project img="../../../../assets/images/Banner1.webp"
                skillName={["HTML", "CSS"]}
                descriptiontitle="Responsive Web Design"
                descriptiontext="Lorem ipsum dolor sit amet"
                buttonTitle="Learn More"
        />
        <Project 
        img="../../../../assets/images/Banner1.webp"
        skillName={["HTML", "CSS"]}
        descriptiontitle="Responsive Web Design"
        descriptiontext="Lorem ipsum dolor sit amet"
        buttonTitle="Learn More"
        />
        <Project 
        img="../../../../assets/images/Banner1.webp"
        skillName={["HTML", "CSS"]}
        descriptiontitle="Responsive Web Design"
        descriptiontext="Lorem ipsum dolor sit amet"
        buttonTitle="Learn More"
        />
      </ProjectsWrapper>
    </Container>
  );
};


const ProjectsWrapper = styled.div`
  display: flex;
  gap: 16px;
  height: 100vh;
`