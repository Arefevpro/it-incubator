import React from "react";
import styled from 'styled-components';
import photoP1 from "../../../../assets/images/Preview1.webp";
import { FlexWrapper } from "../../../../components/Flex/FlexWrapper";
import { IconDecor } from "../../../../components/svg/Svg";

export const MainSection = ( ) => {
  return (
  <div>
    <FlexWrapper>
   <FlexWrapper direction="column">
   <MainTitle>Elias is a 
        <MainTitleAccent>web designer</MainTitleAccent> 
         and 
        <MainTitleAccent>front-end developer</MainTitleAccent>
        </MainTitle>
      <p>He crafts responsive websites where technologies meet creativity</p>
      <button>Contact me!!</button>
   </FlexWrapper>
     <FlexWrapper direction="column">
     <Photo src={photoP1} alt="" />
     <IconDecor />
      <h2>Currently working on 
        <span>Portfolio</span>
      </h2>
     </FlexWrapper>
    </FlexWrapper>
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
`;

const MainTitleAccent = styled.h1`
  font-size: 32px;
  color: #C778DD;
`;