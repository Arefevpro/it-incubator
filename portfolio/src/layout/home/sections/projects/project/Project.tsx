import React from 'react';
import styled from 'styled-components';
import { Button } from '../../../../../components/Button';
import { theme } from '../../../../../styles/Theme';




export const Project = (props) => {
  return (
    <StyledProject>
      <ImageWrapper>
        <Image src={props.img} />
      </ImageWrapper>
      <SkillsWrapper>
        <SkillText>{props.tags.map( tag => tag)}</SkillText>
      </SkillsWrapper>
      <Description>
        <Title>{props.title}</Title>
        <Title>{props.text}</Title>
        <Button>Live </Button>
      {props.cached && <Button>Cached</Button>}
      </Description>
    </StyledProject>
  );
};

<

const StyledProject = styled.div`
  display: flex;
  flex-direction: column;
  width: 330px;
  height: 100%;
  border: 1px solid red;
`;


const ImageWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  border: 1px solid red;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
`;


const SkillsWrapper = styled.div`
  display: flex;
  border: 1px solid red;
`;

const SkillText = styled.p`

`;


const Description = styled.div`
  
  border: 1px solid red;

  Button {

  }
`;

const Title = styled.p`

`;

