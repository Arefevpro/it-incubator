import './App.css';
import styled from 'styled-components';
import { Header } from './layout/header/Header';
import { MainSection } from './layout/home/sections/main/Main';
import { QuoteSection } from './layout/quote/Quote';
import { Projects } from "../src/layout/home/sections/projects/Projects";

function App() {
    return (
      <div className="App">
          <Header />
          <MainSection />
          <QuoteSection />
          <Projects /> 
      </div>
    );
}

export default App;
