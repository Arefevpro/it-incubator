import React from 'react';
import styled from 'styled-components';


export const Card = (props) => {


  return (
    <CardWrapper>
      <ImageWrapper>
      <Image src="https://www.svgrepo.com/show/373273/light-node.svg" alt="" />
      </ImageWrapper>
 <SkillsWrapper>
<Skills>{props.name}</Skills>
<Skills></Skills>
<Skills></Skills>
 </SkillsWrapper>
      <Description>
        <DescriptionTitle>Name</DescriptionTitle>
        <DescriptionText>Text description</DescriptionText>
        <ButtonWrapper>
          <Button>Button</Button>
          <Button>Button</Button>
        </ButtonWrapper>
      </Description>
    </CardWrapper>
  );
};


const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  height: 600px;
  width: 300px;
  border: 1px solid red;
`;

const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  height: 300px;
  width: 300px;
  border: 1px solid red;
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  background-position: center;
`;

const SkillsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  height: 100px;
  width: 300px;
  border: 1px solid red;
`;

const Skills = styled.p`
  padding: 5px;
  border: 1px solid red;
  margin: 0;
`;

const Description = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

const DescriptionTitle = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

const DescriptionText = styled.div`
  font-size: 16px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;
