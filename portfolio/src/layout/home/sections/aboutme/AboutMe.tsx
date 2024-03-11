import React from 'react';
import styled from 'styled-components';
import { theme } from '../../../../styles/Theme';
import { Container } from '../../../../components/slider/Container';
import { SectionTitle } from '../../../../components/textComponents/SectionTitle';
import { Hashtag } from '../../../../components/hashtag/Hashtag';
import { Button } from '../../../../components/Button';
import imgPreview2 from '../../../../assets/images/Preview2.webp';


export const AboutMe = () => {
  return (
    <Container>
      <AboutMeWrapper>
        <DescriptionWrapper>
          <TitleWrapper>
          <Hashtag name="#" />
          <SectionTitle title="about-me" />
          </TitleWrapper>
          <DescriptionTitle>
          Hello, i’m Elias!
          </DescriptionTitle>
          <DescriptionText>
            I’m a self-taught front-end developer based in Kyiv, Ukraine. I can
            develop responsive websites from scratch and raise them into modern
            user-friendly web experiences.{" "}
          </DescriptionText>
          <DescriptionText>
            Transforming my creativity and knowledge into a websites has been my
            passion for over a year. I have been helping various clients to
            establish their presence online. I always strive to learn about the
            newest technologies and frameworks.{" "}
          </DescriptionText>
          <Button title="Learn More" />
        </DescriptionWrapper>
        <ImgWrapper></ImgWrapper>
      </AboutMeWrapper>
    </Container>
  );
};


const AboutMeWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 166px;
  height: 100%;
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 516px;
  span {
    font-size: 32px;
  }

  &::after {
    content: "";
    display: inline-block;
    width: 100%;
    height: 1px;
    background-color: ${theme.colors.accentGreen};
    margin-left: 16px;
  }
`


const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  justify-content: space-between;
 max-width: 515px;
`;


const DescriptionTitle = styled.h3`
  color: ${theme.colors.accentWhite};
`

const DescriptionText = styled.p`
  color: ${theme.colors.accentWhite};
`


const ImgWrapper = styled.div`
  display: flex;
  width: 343px;
  height: 508px;
  background-image: url(${imgPreview2});
  background-size: contain;
  background-repeat: no-repeat;
`

const Img = styled.img`
  width: 100%;
  height: 100%;
`

const ButtonWrapper = styled.div`
  display: flex;
  gap: 16px;
`

