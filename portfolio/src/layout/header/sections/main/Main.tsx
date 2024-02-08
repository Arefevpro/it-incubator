import React from "react";
import styled from 'styled-components';
import photoP1 from '../../../../assets/images/Preview1.webp';
import { FlexWrapper } from "../../../../components/FlexWrapper";


export const Main = ( ) => {
  return (
  <div>
    <FlexWrapper>
   <div>
   <h1>Elias is a 
        <span>web designer</span> 
         and 
        <span>front-end developer</span>
        </h1>
      <p>He crafts responsive websites where technologies meet creativity</p>
      <button>Contact me!!</button>
      <Photo src={photoP1} alt="" />
      <h2>Currently working on 
        <span>Portfolio</span>
      </h2>
   </div>
    </FlexWrapper>
  </div>
  );
};

const Photo = styled.img`
  width: 457px;
  height: 386px;
  object-fit: cover;
`;