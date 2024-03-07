import React from 'react';
import styled from 'styled-components';
import { Button } from '../../../../../components/Button';
import { theme } from '../../../../../styles/Theme';




export const Project = () => {
  return (
    <StyledProject>
      <ImageWrapper>
        <Image src="" />
      </ImageWrapper>
      <SkillsWrapper>
        <SkillText></SkillText>
      </SkillsWrapper>
      <Description>
        <Title></Title>
      </Description>
    </StyledProject>
  );
};



const StyledProject = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 20px;
`;


const ImageWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
`;


const SkillsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const SkillText = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;


const Description = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

const Title = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

