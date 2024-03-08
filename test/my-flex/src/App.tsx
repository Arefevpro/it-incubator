import React from 'react';
import './App.css';
import styled from 'styled-components';
import { MyPost } from './MyPost';
import { Afcomponents } from './Afcomponents';
import { Fcomponent } from './Fcomponent';
import { Ccomponent } from './Ccomponent';

function App() {
  return (
    <div className="App">
      <MyPost />
      <Afcomponents />
      <Fcomponent />
      <Ccomponent />
     </div>
  );
}

export default App;
