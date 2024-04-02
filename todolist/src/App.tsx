import "./App.css";
import { TaskType } from "./Types";
import { Todolist } from "./Todolist";

function App() {
  const titleNameOne = "My todolistName";
  const titleNameTwo = "Blue todolistName";
  const titleNameThree = "Green todolistName";
  const tasks_1: Array<TaskType> = [
    {
      id: 1,
      title: "HTML&CSS",
      isDone: true,
    },
    {
      id: 2,
      title: "JS",
      isDone: true,
    },
    {
      id: 3,
      title: "React",
      isDone: false,
    },
  ];
  const tasks_2: Array<TaskType> = [
    {
      id: 1,
      title: "Apple",
      isDone: true,
    },
    {
      id: 2,
      title: "Orange",
      isDone: true,
    },
    {
      id: 3,
      title: "Pear",
      isDone: false,
    },
  ];

  return (
    <div className="App">
      <Todolist title={titleNameOne} tasks={tasks_1} />
      <Todolist title={titleNameTwo} tasks={tasks_1} />
      <Todolist title={titleNameThree} tasks={tasks_1} />
      {/* <Todolist title={titleName}/>  */}
    </div>
  );
}

export default App;
