import './App.css';
import styled from 'styled-components';
import { Header} from '../src/layout/header/Header';
import { Main } from '../src/layout/section/main/Main';
import { Skills } from './layout/section/skills/Skills';
import { Works } from './layout/section/works/Works';


function App() {
    return (
        <div className="App">
            <Header />
            <Main />
            <Skills />
            <Works />
        </div>
    );
}

export default App;