import React from 'react';
import styled from 'styled-components';
import { Button } from '../../../../../components/Button';
import { theme } from '../../../../../styles/Theme';

export const ProjectTwo = () => {
  return (
    <ProjectWrapper>
      <ImgWrapper>
        <Img src="../../../../../assets/images/Banner1.webp" />
      </ImgWrapper>
      <SkillsWrapper>
        <SkillName>HTML</SkillName>
        <SkillName>CSS</SkillName>
        <SkillName>Python</SkillName>
        <SkillName>Flask</SkillName>
      </SkillsWrapper>
      <Description>
        <DescriptionTitle>Responsive Web Design</DescriptionTitle>
        <DescriptionText>Lorem ipsum dolor sit amet</DescriptionText>
        <ButtonWrapper>
        <Button>Learn More</Button>
        <Button>Learn More</Button>
        </ButtonWrapper>
      </Description>
    </ProjectWrapper>
  );
};


const ProjectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 330px;
  height: 100%;
  border: 1px solid red;
`;

const ImgWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  border: 1px solid red;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
`;

const SkillsWrapper = styled.div`
  display: flex;
  border: 1px solid red;
`;

const SkillName = styled.p`
  display: flex;
  border: 1px solid red;
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid red;
`;


const DescriptionTitle = styled.h3`
  display: flex;
  border: 1px solid red;
`;


const DescriptionText = styled.p`
  display: flex;
  border: 1px solid red;
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 8px;
  border: 1px solid red;
`;