import React from 'react';
import './App.css';
import styled from 'styled-components';
import { GlobalStyles } from './styles/GlobalStyles';
import { StyledBtn } from './styles/ButtonStyled';
import { TextStyles } from './styles/TextStyles';
import { ContainerBtn } from './styles/ButtonStyled'
import { GlobalCardStyles } from './styles/CardStyles'
import { CardImage } from './styles/CardStyles'



function App() {
  return (
    <div className="App">
    <GlobalStyles />
    <GlobalCardStyles>
    <CardImage ></CardImage>
    <TextStyles>Headline</TextStyles>
    <ContainerBtn>
    <StyledBtn>See more</StyledBtn>
    <StyledBtn>Save</StyledBtn>
    </ContainerBtn>
    </GlobalCardStyles>
    </div>
  );
}

export default App;
