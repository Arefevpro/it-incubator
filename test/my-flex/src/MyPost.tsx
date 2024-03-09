import React from 'react';
import styled from 'styled-components';
import { Card } from './Card';

export const MyPost = () => {
  return (
    <BoxWrapper>
      <Card
        imageSrc="https://www.svgrepo.com/show/373273/light-node.svg"
        skills={["html"]}
        title="ChertNodes"
      
      />
      <Card imageSrc="https://avatars.mds.yandex.net/i?id=496176f00b194ee00d672a0485d4ab56668ece59-12582966-images-thumbs&n=13"/>
      <Card />
    </BoxWrapper>
  );
};

const BoxWrapper = styled.div`
  display: flex;
  gap: 20px;
  height: 100vh;
  border: 1px solid red;
`