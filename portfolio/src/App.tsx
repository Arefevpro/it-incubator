import './App.css';
import styled from 'styled-components';
import { Header } from './layout/header/Header';
import { MainSection } from './layout/home/sections/main/Main';
import { QuoteSection } from './layout/quote/Quote';

function App() {
    return (
      <div className="App">
          <Header />
          <MainSection />
          <QuoteSection />
      </div>
    );
}

export default App;
