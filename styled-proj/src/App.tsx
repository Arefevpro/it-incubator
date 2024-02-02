import React from 'react';
import './App.css';
import styled from 'styled-components';
import {StyledBtn} from './components/Button.styled';

function App() {
  return (
    <div className="App">
      <Menu>
        <ul>
          <li><a href="">menu item1</a></li>
          <li><a href="">menu item2</a></li>
          <li><a href="">menu item3</a></li>
        </ul>
      </Menu>
      <Box>
      <StyledBtn as={Link} href={"#"}>LinkComponent</StyledBtn>
      <StyledBtn as="a" href={"#"}>Link</StyledBtn>
      <StyledBtn>Hello world!</StyledBtn>
      <SuperButton>HeLLO METALL</SuperButton>
      </Box>
    </div>
  );
}

export default App;


const Link = styled.a `
  padding: 10px 20px;
  color: #052bb7;
  font-weight: bold;
  background-color: transparent;
  padding: 0;
` 

const SuperButton = styled(StyledBtn) `
  border-radius: 50px;
  background-color: #080005;
  color: red;
`

const Box = styled.div `
  height: 100vh;
  display: flex;
  background-color: #5b5f62;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  button {
    cursor: pointer;
  }

  ${Link} {
    cursor: zoom-in;
  }

  ${SuperButton} {
    cursor: zoom-out;
  }

`

export const Menu = styled.nav `
  ul {
    list-style: none;
    padding: 0;
    margin: 50px;
    font-size: 30px;
    display: flex;

    Li > a {
    color: #2f7604;
  }

  li + li {
    margin-left: 20px;
  }

  }

`