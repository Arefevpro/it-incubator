import './App.css';
import styled from 'styled-components';
import { Header} from '../src/layout/header/Header';
import { Main } from '../src/layout/section/main/Main';
import { Skills } from './layout/section/skills/Skills';
import { Works } from './layout/section/works/Works';
import { Testimony } from './layout/section/testimony/Testimony';
import { Contacts } from './layout/section/contacts/Contacts';


function App() {
    return (
        <div className="App">
            <Header />
            <Main />
            <Skills />
            <Works />
            <Testimony />
            <Contacts />
        </div>
    );
}

export default App;