import React from 'react';
import styled from 'styled-components';
import { theme } from '../../styles/Theme';


type PropsType = {
  title: string;
}


export const SectionTitle = ({ title }: PropsType ) => {
  return (
  <Title>{ title }</Title>
  
      
  );
};


const Title = styled.h2`
  font-size: 32px;
  color: ${theme.colors.accentWhite};
  align-self: end; 
  font-weight: 500;
  `
