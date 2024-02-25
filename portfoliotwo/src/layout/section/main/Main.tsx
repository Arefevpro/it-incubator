import React from 'react';
import styled from "styled-components"
import photo from "../../../assets/images/photo.webp"
import { FlexWrapper } from "../../../components/Flexwrapper"
import { Container } from '../../../components/slider/Container';


export const Main = () => {
  return (
    <Styledmain>
      <Container>
        <FlexWrapper alignItems="center" justifyContent="space-between">
          <div>
            <SmallText>Hi There</SmallText>
            <Name>I am Svetlana Dyablo</Name>
            <MainTitle>A Web Developer.</MainTitle>
          </div>
          <Photo src={photo} alt="" />
        </FlexWrapper>
      </Container>
    </Styledmain>
  );
};


const Styledmain = styled.section`
min-height: 100vh;
display: flex;
`

const Photo = styled.img`
  width: 350px;
  height: 430px;
  object-fit: cover;
`

const MainTitle = styled.h1`
font-size: 27px;
font-weight: 400;
line-height: 41px;
`
const Name = styled.h2`
  font-family: 'Josefin Sans', sans-serif;
  font-size: 50px;
  font-weight: 700;
  letter-spacing: 0.05em;
`

const SmallText = styled.h2`
  font-size: 14px;
  font-weight: 400;
`