import React from "react";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Header />
      <h1>Hello, samurai! Let's go!</h1>
      <Tachnologies />
    </div>
  );
};

export default App;

const Header = () => {
  return (
    <div>
      <a href="#c">Home</a>
      <a href="#c">Projects</a>
      <a href="#c">About me</a>
    </div>
  );
};

const Tachnologies = () => {
  return (
    <ul>
      <li>HTML</li>
      <li>CSS</li>
      <li>JS</li>
      <li>React</li>
      <li>Redux</li>
      <li>Typescript</li>
    </ul>
  )
};