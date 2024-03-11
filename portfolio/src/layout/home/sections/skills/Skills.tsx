import React from 'react';
import styled from 'styled-components';
import { SectionTitle } from '../../../../components/textComponents/SectionTitle';
import { Hashtag } from '../../../../components/hashtag/Hashtag';
import { theme } from '../../../../styles/Theme';
import { Container } from '../../../../components/slider/Container';


export const Skills = () => {
  return (
    <Container>
      <SkillsWrapper>
        <TitleWrapper>
          <Hashtag name="#" />
          <SectionTitle title="skills" />
        </TitleWrapper>
        <BoxWrapper>
          <DecorWrapper>
            <CubeDecorOne />
            <CubeDecorTwo />
          </DecorWrapper>
          <CardWrapper></CardWrapper>
        </BoxWrapper>
      </SkillsWrapper>
    </Container>
  );
};


const SkillsWrapper = styled.div`
padding-top: 106px;
  display: flex;
  flex-direction: column;
  gap: 12x;
  width: 100%;
  height: 100vh;
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 390px;
   span {
    font-size: 32px;
   }

   &::after {
    content: "";
    display: inline-block;
    width: 100%;
    height: 1px;
    background-color: ${theme.colors.accentGreen};
    margin-top: 8px;
    margin-left: 16px;
  }
  `

const BoxWrapper = styled.div`
  display: flex;
  gap: 58px;
  width: 100%;
  height: 100%;
  `

const DecorWrapper = styled.div`
  width: 350px;
  height: 282px;
  border: 1px solid ${theme.colors.colorGray};
  position: relative;
  `;

const CubeDecorOne = styled.div`
width: 86px;
height: 86px;
border: 1px solid ${theme.colors.colorGray};
position: absolute;
top: 0;
right: 36px;
`;


const CubeDecorTwo = styled.div`
width: 52px;
height: 52px;
border: 1px solid ${theme.colors.colorGray};
position: absolute;
right: 0;
bottom: 37px;
`;


const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 584px;
  border: 1px solid ${theme.colors.colorGray};
`


