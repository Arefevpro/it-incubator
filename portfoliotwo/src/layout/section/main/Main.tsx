import React from 'react';
import styled from "styled-components"
import photo from "../../../assets/images/photo.webp"
import { FlexWrapper } from "../../../components/Flexwrapper"
import { Container } from '../../../components/slider/Container';
import { theme } from '../../../styles/Theme';


export const Main = () => {
  return (
    <Styledmain>
      <Container>
        <FlexWrapper alignItems="center" justifyContent="space-between" wrap='wrap'>
          <div>
            <SmallText>Hi There</SmallText>
            <Name>
              I am <span>Svetlana Dyablo</span>
            </Name>
            <MainTitle>A Web Developer.</MainTitle>
          </div>

          <PotoWrapper>
            <Photo src={photo} alt="" />
          </PotoWrapper>
        </FlexWrapper>
      </Container>
    </Styledmain>
  );
};


const Styledmain = styled.section`
min-height: 100vh;
display: flex;
`

const PotoWrapper = styled.div`
  position: relative;
  z-index: 1;

  &::before {
    content: "";
    display: inline-block;
    position: absolute;
    top: -24px;
    left: 24px;
    z-index: -1;
    border: 5px solid ${theme.colors.accent};
    height: 470px;
    width: 360px;
  }
`

const Photo = styled.img`
  width: 350px;
  height: 430px;
  object-fit: cover;


  @media ${theme.media.mobile} {
    width: 310px;
    height: 380px;
    
  }
`

const MainTitle = styled.h1`
font-size: 27px;
font-weight: 400;
line-height: 41px;
`
const Name = styled.h2`
  font-family: "Josefin Sans", sans-serif;
  font-size: 50px;
  font-weight: 700;
  letter-spacing: 0.05em;
  margin: 10px 0;

  span {
position: relative;
z-index: 1;

    &::before {
      content: "";
      display: inline-block;
      position: absolute;
      background-color: ${theme.colors.accent};
      height: 20px;
      width: 100%;
      bottom: 0;
      z-index: -1;
    }
  }
`

const SmallText = styled.h2`
  font-size: 14px;
  font-weight: 400;
`