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
          <SectionTitle title="about me" />
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
  gap: 48px;
  height: 100%;
`;


const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 700px;
`;


const DescriptionText = styled.p`
  color: ${theme.colors.accentWhite};
`


const ImgWrapper = styled.div`
  display: flex;
  width: 700px;
  height: 400px;
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

