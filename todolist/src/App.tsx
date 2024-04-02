import './App.css';
import { Todolist } from './Todolist';

function App() {
// const titleName = "My todolistName";
const tasks_1 = []
const tasks_2 = []


    return (
        <div className="App">
            <Todolist title="My todolist"/>
            <Todolist title="Songs"/>
            <Todolist title="Books"/>
            {/* <Todolist title={titleName}/>  */}
        </div>
    );
}

export default App;
