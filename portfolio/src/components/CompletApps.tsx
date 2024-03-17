import React from 'react';
import styled from 'styled-components';
import { SectionTitle } from './textComponents/SectionTitle';
import { Container } from './slider/Container';
import { ProjectOne } from '../pages/home/projects/project/ProjectOne';
import { ProjectThre } from '../pages/home/projects/project/ProjectThre';
import { ProjectTwo } from '../pages/home/projects/project/ProjectTwo';
import { ProjectTest } from '../pages/home/projects/project/ProjectTest';
import img1 from '../assets/images/Banner1.webp'
import img2 from '../assets/images/Banner2.webp'
import img3 from '../assets/images/Banner3.webp'
import img4 from '../assets/images/Banner4.webp'
import img5 from '../assets/images/Banner5.webp'



export type ProjectType = {
  img: string,
  skills: string[],
  title: string,
  description: string,
}
const porjectsArr:ProjectType[] = [
  {
    img:img1,
    skills: ['HTML', 'SCSS', 'Python', 'Flask'] ,
    title:'ChertNodes',
    description: 'Lorem ipsum dolor sit amet'
  },
  {
    img:img2,
    skills: ['React', 'Express', 'Discord.js', 'Node,js', 'HTML', 'SCSS', 'Python', 'Flask'] ,
    title:'Protect X',
    description: 'Discord anti-crash bot'
  },
  {
    img:img3,
    skills: ['CSS', 'Express', 'Node,js'] ,
    title:'Kahoot Answers Viewer',
    description: 'Get answers to your kahoot quiz'
  }

]

export const CompletApps = () => {
  return (
    <Container>
      <SectionTitle title="complete-apps" />
      <SectionWrapper>
      {porjectsArr.map((project, index) => (
            <ProjectOne project={project} cashed={index === 0} />
          ))}
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
