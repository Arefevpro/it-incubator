import React from 'react';
import styled from 'styled-components';
import { theme } from '../../styles/Theme';

type PropsType = {
  name: string;
  width: string;
};


export const Hashtag = ({ name, width }: PropsType) => {
  return (
    <HashtagLink>{ name }{ width }</HashtagLink>
  );
};

const HashtagLink = styled.a`
  color: ${theme.colors.accentGreen} ;
`
