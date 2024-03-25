


 
export const Todolist = () => {
  return (
    <div>
      <h3>What to learn</h3>
      <div>
        <input />
        <button>+</button>
      </div>
      <ul>
        <li>
          <input type="checkbox" checked={true} /> <span>HTML&CSS</span>
        </li>
        <li>
          <input type="checkbox" checked={true} /> <span>JS</span>
        </li>
        <li>
          <input type="checkbox" checked={false} /> <span>React</span>
        </li>
      </ul>
      <div>
        <button>All</button>
        <button>Active</button>
        <button>Completed</button>
      </div>
    </div>
  )
}


























// type PropsType = {
//   title: string
//   tasks: TaskType[]
//   date?: string
// }


// type TaskType = {
//   id: number
//   title: string
//   isDone: boolean
// }

// export const Todolist = ({ title, tasks, date }: PropsType) => {

//   return (
//     <div>
//     <h3>{title}</h3>
//     <div>
//         <input/>
//         <Button title={'+'} />
//     </div>
//     {tasks.length === 0 ? (
//         <p>Тасок нет</p>
//       ) : (
//         <ul>
//           {tasks.map(task => {
//             return (
//               <li key={task.id}>
//                 <input type="checkbox" checked={task.isDone} />
//                 <span>{task.title}</span>
//               </li>
//             )
//           })}
//         </ul>
//       )}
//     <div>
//     <Button title={'All'} />
//         <Button title={'Active'} />
//         <Button title={'Completed'} />
//     </div>
//     <div>{date}</div>
// </div>
//   );
// };


// type ButtonPropsType = {
//   title: string
// }
 
// export const Button = ({ title }: ButtonPropsType) => {
//   return <button>{title}</button>
// }