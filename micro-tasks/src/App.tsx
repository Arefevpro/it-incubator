import React, { useState } from "react";
import "./App.css";
import { Body } from "./site/Body";
import { Footer } from "./site/Footer";
import { Header } from "./site/Header";
import { NewComponent } from "./site/NewComponent";
import { Button } from "./site/Button";

function App() {
  const [students, setStudents] = useState([
    { id: 1, name: "James", age: 8 },
    { id: 2, name: "Robert", age: 18 },
    { id: 3, name: "John", age: 28 },
    { id: 4, name: "Michael", age: 38 },
    { id: 5, name: "William", age: 48 },
    { id: 6, name: "David", age: 58 },
    { id: 7, name: "Richard", age: 68 },
    { id: 8, name: "Joseph", age: 78 },
    { id: 9, name: "Thomas", age: 88 },
    { id: 10, name: "Charles", age: 98 },
    { id: 11, name: "Christopher", age: 100 },
  ]);
  return (
    <>
      <Header titleHeader={"Header"} />
      <Body titleBody={"Body"} />
      <Footer titleFooter={"Footer"} />
      <NewComponent students={students} />
      <Button />
    </>
  );
}

export default App;
