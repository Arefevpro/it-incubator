import React from 'react';
import styled from 'styled-components';
import { Card } from './Card';

export const MyPost = () => {
  return (
    <BoxWrapper>
      <Card
        imageSrc="https://www.svgrepo.com/show/373273/light-node.svg"
        skills={["html", "css"]}
        title="ChertNodes"
      
      />
      <Card />
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