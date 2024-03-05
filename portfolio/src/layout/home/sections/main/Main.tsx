import React from "react";
import styled from 'styled-components';
import photoP1 from "../../../../assets/images/Preview1.webp";
import { FlexWrapper } from "../../../../components/flex/FlexWrapper";
import { theme } from "../../../../styles/Theme";
import { Container } from "../../../../components/slider/Container";

export const MainSection = ( ) => {
  return (
    <div>
      <Container>
      <FlexWrapper>
        <FlexWrapper direction="column">
          <MainTitle>
            Elias is a<MainTitleAccent>web designer</MainTitleAccent>
            and
            <MainTitleAccent>front-end developer</MainTitleAccent>
          </MainTitle>
          <p>
            He crafts responsive websites where technologies meet creativity
          </p>
          <button>Contact me!!</button>
        </FlexWrapper>
        <FlexWrapper direction="column">
          <Photo src={photoP1} alt="" />
          <h2>
            Currently working on
            <span>Portfolio</span>
          </h2>
        </FlexWrapper>
      </FlexWrapper>
      </Container>
    </div>
  );
};

const Photo = styled.img`
  width: 457px;
  height: 386px;
  object-fit: cover;
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