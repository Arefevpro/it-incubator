import './App.css';
import styled from 'styled-components';
import { Header } from './layout/header/Header';
import { MainSection } from './pages/home/sections/main/Main';
import { QuoteSection } from './layout/quote/Quote';
import { Projects } from "./pages/home/sections/projects/Projects";
import { Media } from './components/media/Media';
import { Skills } from './pages/home/sections/skills/Skills';
import { AboutMe } from './pages/home/sections/aboutme/AboutMe';
import { Contacts } from './pages/home/sections/contacts/Contacts';
import { Footer } from './layout/footer/Footer';




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
          <Footer />
      </div>
    );
}

export default App;
