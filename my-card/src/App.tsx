import React from "react";
import "./App.css";
import styled from "styled-components";
import { GlobalStyles } from "./styles/GlobalStyles";
import { StyledBtn } from "./styles/ButtonStyled";
import { Title } from "./styles/Title";
import { ContainerBtn } from "./styles/ButtonStyled";
import { Card } from "./styles/CardStyles";
import { CardImage } from "./styles/CardStyles";
import { Text } from "./styles/ButtonStyled";
import { ContainerInfo } from "./styles/ButtonStyled";
import { StyledBtnSave } from "./styles/ButtonStyled";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Card>
        <CardImage src="" alt="Hello"/>
        <ContainerInfo>
          <Title>Headline</Title>
          <Text>
            Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie
            ornare in venen.
          </Text>
          <ContainerBtn>
            <StyledBtn type="primary">See more</StyledBtn>
            <StyledBtn type="secondary">Save</StyledBtn>
          </ContainerBtn>
        </ContainerInfo>
      </Card>

      <StyledBtnSave type="primary">Save</StyledBtnSave>
      
      <Card title="Hello" text="Hiii" src={}>
      <Card title="Goodbye" text="Byeee" src={}>

    </div>
  );
}

export default App;
