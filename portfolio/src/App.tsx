import './App.css';
import styled from 'styled-components';
import { Header } from './layout/header/Header';
import { Main } from './layout/sections/main/Main';

function App() {
    return (
        <div className="App">
            <StylGlobal>
            <Header />
            <Main />
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