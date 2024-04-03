import { PropsType } from "./Types";

export const Todolist = ({ title, tasks, date }: PropsType) => {

const tasksList = tasks.map((task) => {
  return ( 
    <li key={task.id}>
      <input type="checkbox" checked={task.isDone} /> <span>{task.title}</span>
    </li>
  )
})

    return (
      <div className="todolist">
      <h3>{title}</h3>
      <div>
        <input />
        <button>+</button>
      </div>
      {tasks.length === 0 ? (
        <p className="no-tasks">Тасок нет</p>
      ) : (
      <ul>
        {tasksList}
      </ul>
      )}
      <div>
        <button>All</button>
        <button>Active</button>
        <button>Completed</button>
        <div>{date}</div>
      </div>
    </div>
    )
}