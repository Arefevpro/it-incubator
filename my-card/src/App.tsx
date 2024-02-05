import React from 'react';
import './App.css';
import styled from 'styled-components';
import { GlobalStyles } from './styles/GlobalStyles';
import { StyledBtn } from './styles/ButtonStyled';
import { TextStyles } from './styles/TextStyles';
import { ContainerBtn } from './styles/ButtonStyled'
import { GlobalCardStyles } from './styles/CardStyles'
import { CardImage } from './styles/CardStyles'
import { ContainerPar } from './styles/ButtonStyled'
import { ContainerInfo } from './styles/ButtonStyled'
import { StyledBtnSave } from './styles/ButtonStyled'


function App() {
  return (
    <div className="App">
    <GlobalStyles />
    <GlobalCardStyles>
    <CardImage ></CardImage>
    <ContainerInfo>
    <TextStyles>Headline</TextStyles>
    <ContainerPar>
    Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.
    </ContainerPar>
    <ContainerBtn>
    <StyledBtn>See more</StyledBtn>
    <StyledBtnSave>Save</StyledBtnSave>
    </ContainerBtn>
    </ContainerInfo>
    
    </GlobalCardStyles>
    </div>
  );
}

export default App;
