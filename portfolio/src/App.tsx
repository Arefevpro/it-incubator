import './App.css';
import styled from 'styled-components';
import { Header } from './layout/header/Header';
import { MainSection } from './layout/home/sections/main/Main';
import { SkillsSection } from './layout/home/sections/skills/Skills';

function App() {
    return (
      <div className="App">
        <StylGlobal>
          <Header />
          <MainSection />
          <SkillsSection />
        </StylGlobal>
      </div>
    );
}

export default App;

export const StylGlobal = styled.div`
  background-color: #2b2e31;
  color: white;
  padding-left: 173px;
  padding-right: 169px;
`;