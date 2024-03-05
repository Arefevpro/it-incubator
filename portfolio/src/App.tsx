import './App.css';
import styled from 'styled-components';
import { Header } from './layout/header/Header';
import { MainSection } from './layout/home/sections/main/Main';

function App() {
    return (
      <div className="App">
          <Header />
          <MainSection />
      </div>
    );
}

export default App;
