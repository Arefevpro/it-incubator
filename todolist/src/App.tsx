import './App.css';
import {TaskType} from './Types';
import { Todolist } from './Todolist';

function App() {
// const titleName = "My todolistName";
const tasks_1: Array<TaskType> = []
const tasks_2: Array<TaskType> = []


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
