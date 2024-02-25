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
  color: #ffffff;
`
const Name = styled.h2`
  color: #ffffff;
`

const SmallText = styled.h2`
  font-size: 14px;
  font-weight: 400;
`