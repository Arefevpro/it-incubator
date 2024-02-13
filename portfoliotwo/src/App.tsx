import './App.css';
import styled from 'styled-components';
import { Header} from '../src/layout/header/Header';
import { Main } from '../src/layout/section/main/Main';


function App() {
    return (
        <div className="App">
            <Header />
            <Main />
        </div>
    );
}

export default App;