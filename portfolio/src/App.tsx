import './App.css';
import styled from 'styled-components';
import { Header } from './layout/header/Header';
import { MainSection } from './layout/home/sections/main/Main';
import { QuoteSection } from './layout/quote/Quote';
import { Projects } from "./layout/home/sections/projects/Projects";
import { Media } from './components/media/Media';
import { Skills } from './layout/home/sections/skills/Skills';
import { AboutMe } from './layout/home/sections/aboutme/AboutMe';
import { Contacts } from './layout/home/sections/contacts/Contacts';




function App() {
    return (
      <div className="App">
          <Header />
          <Media />
          <MainSection />
          <QuoteSection />
          <Projects />
          <Skills />
          <AboutMe />
          <Contacts />
      </div>
    );
}

export default App;
