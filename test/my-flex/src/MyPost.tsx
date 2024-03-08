import React from 'react';
import styled from 'styled-components';
import { Card } from './Card';

export const MyPost = () => {
  return (
    <BoxWrapper>
      <Card name="html, css, js"/>
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