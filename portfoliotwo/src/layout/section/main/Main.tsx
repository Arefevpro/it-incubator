import React from 'react';
import styled from "styled-components"
import photo from "../../../assets/images/photo.webp"
import { FlexWrapper } from "../../../components/Flexwrapper"


export const Main = () => {
  return (
    <Styledmain>
      <FlexWrapper alignItems='center' justifyContent='space-around'>
        <div>
          <span>Hi There</span>
          <h2>I am Svetlana Dyablo</h2>
          <h1>A Web Developer.</h1>
        </div>
          <Photo src={photo} alt="" />
      </FlexWrapper>
    </Styledmain>
  );
};


const Styledmain = styled.div`
min-height: 100vh;
background-color: #3d9ea3;
`



const Photo = styled.img`
  width: 350px;
  height: 430px;
  object-fit: cover;
`
