import React from 'react';
import styled from 'styled-components';
import { SectionTitle } from './textComponents/SectionTitle';
import { Container } from './slider/Container';
import { ProjectOne } from '../pages/home/projects/project/ProjectOne';
import { ProjectThre } from '../pages/home/projects/project/ProjectThre';
import { ProjectTwo } from '../pages/home/projects/project/ProjectTwo';
import { ProjectTest } from '../pages/home/projects/project/ProjectTest';



export const CompletApps = () => {
  return (
    <Container>
      <SectionTitle title="complete-apps" />
      <SectionWrapper>
        
      </SectionWrapper>
    </Container>
  );
};


const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 48px;
  padding-top: 48px;
  padding-bottom: 48px;
  `
