import React from 'react';
import styled from 'styled-components';
import { Button } from '../../../../../components/Button';
import { theme } from '../../../../../styles/Theme';

export const ProjectOne = () => {
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
        <DescriptionTitle>ChertNodes</DescriptionTitle>
        <DescriptionText>Lorem ipsum dolor sit amet</DescriptionText>
        <ButtonWrapper>
        <Button>Live</Button>
        <Button>Cached</Button>
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
  border: 1px solid ${theme.colors.colorGray};
`;

const ImgWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 200px;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
`;

const SkillsWrapper = styled.div`
  padding-top: 8px;
`;

const SkillName = styled.p`

`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid ${theme.colors.colorGray};
  padding: 16px;
  gap: 16px;
`;


const DescriptionTitle = styled.h3`
  font-size: 24px;
  font-weight: 500;
`;


const DescriptionText = styled.p`
  display: flex;
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 16px;
`;