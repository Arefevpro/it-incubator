import React from 'react';
import styled from "styled-components"


type WorkPropstype = {
  title: string
  text: string
  src: string
}


export const Work = ( props: WorkPropstype ) => {
  return (
    <StyledWork>
      <img src={props.src} alt=" " />
      <Title>{props.title}</Title>
      <Text>{props.text}</Text>
      <Link href={"#"}>demo</Link>
      <Link href={"#"}>kode</Link>
    </StyledWork>
  );
};

const StyledWork = styled.div`
box-sizing: border-box;
border: #ed0ce2 2px solid;
min-height: 40vh;
background-color: #a6c9cc;
`

const Image = styled.img`
  
`


const Title = styled.h3`
background-color: #a6c9cc;
`

const Text = styled.p`
background-color: #a6c9cc;
`

const Link = styled.a`
background-color: #a6c9cc;
`