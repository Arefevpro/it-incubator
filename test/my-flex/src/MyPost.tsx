import React from 'react';
import styled from 'styled-components';
import { Post } from './Post';

export const MyPost = () => {
  return (
    <BoxWrapper>
      <Post massege='Hi, how are you?'/>
      <Post messege='Hello'/>
      <Post />
    </BoxWrapper>
  );
};

const BoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  height: 100vh;
`