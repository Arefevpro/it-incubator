import "./App.css";
import { Todolist } from "./Todolist";

function App() {
  return (
    <div className="App">
      <Todolist title="What to learn"/>
      <Todolist title="Songs"/>
      <Todolist title="Books1"/>
    </div>
  );
}

export default App;
