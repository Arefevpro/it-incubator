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
          <Name>I am Svetlana Dyablo</Name>
          <MainTitle>A Web Developer.</MainTitle>
        </div>
          <Photo src={photo} alt="" />
      </FlexWrapper>
    </Styledmain>
  );
};


const Styledmain = styled.div`
min-height: 100vh;
background-color: #133911;
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