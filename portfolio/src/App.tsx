import './App.css';
import styled from 'styled-components';
import { Header } from './layout/header/Header';
import { MainSection } from './layout/home/sections/main/Main';
import { QuoteSection } from './layout/quote/Quote';
import { Projects } from "./layout/home/sections/projects/ProjectsTest";
import { Media } from './components/media/Media';




function App() {
    return (
      <div className="App">
          <Header />
          <Media />
          <MainSection />
          <QuoteSection />
          <Projects />
      </div>
    );
}

export default App;
