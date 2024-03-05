import React from "react";
import styled from 'styled-components';
import photoP1 from "../../../../assets/images/Preview1.webp";
import { FlexWrapper } from "../../../../components/flex/FlexWrapper";
import { theme } from "../../../../styles/Theme";
import { Container } from "../../../../components/slider/Container";

export const MainSection = ( ) => {
  return (
    <div>
      <Styledmain>
        <Container>
          <FlexWrapper>
            <FlexWrapper direction="column">
              <MainTitle>
                Elias is a<MainTitleAccent>web designer</MainTitleAccent>
                and
                <MainTitleAccent>front-end developer</MainTitleAccent>
              </MainTitle>
              <MainText>
                He crafts responsive websites where technologies meet creativity
              </MainText>
              <button>Contact me!!</button>
            </FlexWrapper >
            <FlexWrapper direction="column">
            <PhotoWrapper>
                <Photo />
              </PhotoWrapper>
            <SignatureBox>
                <Signature>
                  Currently working on
                  <SignatureAccent>Portfolio</SignatureAccent>
                </Signature>
              </SignatureBox>
            </FlexWrapper>
             
          </FlexWrapper>
        </Container>
      </Styledmain>
    </div>
  );
};

const Styledmain = styled.section`
min-height: 70vh;
display: flex;
`;

const PhotoWrapper = styled.div`
  position: relative;
  z-index: 1;
  outline: 1px solid red;
`;

const Photo = styled.div`
  width: 457px;
  height: 386px;
  background-image: url(${photoP1});
  background-repeat: no-repeat;
  background-size: cover;
`;

const MainTitle = styled.h1`
  font-size: 32px;
  padding-bottom: 32px;
`;

const MainTitleAccent = styled.span`
  padding: 0 15px;
  display: inline-block;
  color: ${theme.colors.accentGreen};

  &:last-child {
    padding-left: 0;
  }
`;

const MainText = styled.p`
margin-bottom: 24px;
`;

const SignatureBox = styled.div`
  width: 402px;
  height: 37px;
  border: 1px solid ${theme.colors.colorGray};
`

const Signature = styled.p`
  font-weight: 500;
`;

const SignatureAccent = styled.span`
  display: inline-block;
  padding-left: 10px;
  color: ${theme.colors.accentWhite};
`