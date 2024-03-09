import React from 'react';
import styled from 'styled-components';

type PropsType = {
  skills: string[];
  title: string;
  mainButtonTitle?: string; 
  imageSrc?: string;
  text: string;
}
export const Card = ({skills, text, title, mainButtonTitle = 'Live', imageSrc}: PropsType) => {

  return (
    <CardWrapper>
      <ImageWrapper>
      <Image src={imageSrc} alt="" />
      </ImageWrapper>
 <SkillsWrapper>
  {skills.map((skill) => (
    <Skills key={skill}>{skill}</Skills>
  ))}
 </SkillsWrapper>
      <Description>
        <DescriptionTitle>{title}</DescriptionTitle>
        <DescriptionText>{text}</DescriptionText>
        <ButtonWrapper>
          <Button>{mainButtonTitle}</Button>
          <Button>{mainButtonTitle}</Button>
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
  width: 330px;
  border: 1px solid red;
`;

const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  height: 300px;
  width: 100%;
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
  justify-content: start;
  width: 100%;
  border: 1px solid red;
`;

const Skills = styled.p`
  border: 1px solid red;
  padding: 8px;
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
