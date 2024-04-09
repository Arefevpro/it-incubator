import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className="App">
     <Header />
     <h1>Hello, samurai! Let's go!</h1>
     <ul>
       <li>HTML</li>
       <li>CSS</li>
       <li>JS</li>
       <li>React</li>
       <li>Redux</li>
       <li>Typescript</li>
     </ul>
    </div>
  );
}
// 89614622994 магомед
export default App;


const Header = () => {
  return (
    <div>
      <a href="Home">Home</a>
      <a href="Projects">Projects</a>
      <a href="About me">About me</a>
    </div>
  )
}