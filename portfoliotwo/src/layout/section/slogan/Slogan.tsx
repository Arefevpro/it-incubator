import React from 'react';
import styled from 'styled-components';
import { SectionTitle } from '../../../components/SectionTitle';
import { Button } from '../../../components/Button';

export const Slogan = () => {
  return (
    <StyletSlogan>
      <SectionTitle>I Am Available For Freelance</SectionTitle>
      <Button>Hire me</Button>
    </StyletSlogan>
  );
};

const StyletSlogan = styled.section`
  min-height: 40vh;
  background-color: #a6c9cc;
  box-sizing: border-box;
  border: #ed0ce2 2px solid;
`