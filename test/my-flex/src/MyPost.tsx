import React from 'react';
import styled from 'styled-components';
import { Card } from './Card';
// import iconTest from '../../images/Adventure-PNG-Pic.png';

export const MyPost = () => {
  return (
    <BoxWrapper>
      <Card
        imageSrc='https://avatars.mds.yandex.net/i?id=7c1d6bff5c00b9561c43a50e7f13993a84c584bd-9066077-images-thumbs&n=13'
        skills={["HTML",'SCSS' , 'Python', 'Flask']} 
        title="ChertNodes"/>
        
      <Card imageSrc="https://avatars.mds.yandex.net/i?id=496176f00b194ee00d672a0485d4ab56668ece59-12582966-images-thumbs&n=13"
            skills={['React','Express', 'Discord.js', 'Node.js' ]} 
            title="<NAME>"
      />


      <Card skills={['SCSS','Express', 'Node.js']} 
            title="<NAME>"/>
    </BoxWrapper>
  );
};

const BoxWrapper = styled.div`
  display: flex;
  gap: 20px;
  height: 100vh;
  border: 1px solid red;
`


const cardsData = [
  {
    title: 'ChertNodes'
  },

  {

  }
]