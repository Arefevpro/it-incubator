import React from 'react';
import styled from "styled-components"
import { Menu } from '../../../components/menu/Menu';

export const Works = () => {
  return (
    <StyledWorks>
      {/* <SectionTitle>My Works</SectionTitle> */}
      <Menu />
    </StyledWorks>
  );
};

const StyledWorks = styled.section `
  min-height: 40vh;
  background-color: #a6c9cc;
`