import React from 'react';
import styled from 'styled-components';
import { Post } from './Post';
import { Fcomponent } from './Fcomponent';
import { Ccomponent } from './Ccomponent';
import { Menu } from './Menu'

export const MyPost = () => {
  return (
    <BoxWrapper>
      <Menu />
      <Post />
      <Post />
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
  height: 80vh;
`