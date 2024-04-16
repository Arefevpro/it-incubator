type NewComponentType = {
  //students: Array<StydentType> 1й способ
  students: StydentType[];
};

type StydentType = {
  id: number;
  name: string;
  age: number;
};

export const NewComponent = (props: NewComponentType) => {
  
  
  const topCars = [
    {manufacturer:'BMW', model:'m5cs'},
    {manufacturer:'Mercedes', model:'e63s'},
    {manufacturer:'Audi', model:'rs6'}
  ]

return (
  
  
)




  // return (
  //   <ul>
  //     {props.students.map(
  //       (objectFromStudentsArray: StydentType, index: number) => {
  //         return (
  //           <li key={objectFromStudentsArray.id}>
  //             <span>{objectFromStudentsArray.name}</span>
  //             <span> age: {objectFromStudentsArray.age}</span>
  //           </li>
  //         );
  //       }
  //     )}
  //   </ul>
  // );
};
