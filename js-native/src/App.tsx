import './App.css';


function App () {
  return (
    <div className="App">
    </div>
  );
}

export default App;

function calculateNumber(initialValue: number) { // initialValue - параметр функции типа number
  let x = initialValue;
  x = x + 100;
  x = x / 5;

  return x;
}

const result = calculateNumber(5334535);
const result1 = calculateNumber(5335);
console.log(result);
console.log(result1);

function calculateCercleArea(cercleRadius: number) { // initialValue - параметр функции типа number
return 3.14 * cercleRadius ** 2;
}

const cercleArea1 = calculateCercleArea(6);
console.log(cercleArea1);

const cercleArea2 = calculateCercleArea(16.2);
console.log(cercleArea2);