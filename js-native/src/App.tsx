import './App.css';


function App () {
  return (
    <div className="App">
    </div>
  );
}

export default App;

// Function declaration

function calculateNumber(initialValue: number) { // initialValue - параметр функции типа number
  let x = initialValue;
  x = x + 100;
  x = x / 5;

  return x;
}

const result = calculateNumber(5334535);
const result1 = calculateNumber(5335);
// console.log(result);
// console.log(result1);

function calculateCercleArea(cercleRadius: number) { // initialValue - параметр функции типа number
return 3.14 * cercleRadius ** 2;                     // параметр - это переменная
}                                                    // функция может принимать сколько угодно параметров

const cercleArea1 = calculateCercleArea(6); // (6) - это аргумент (значение переменной, которе мы передаем в функцию)
// console.log(cercleArea1);

const cercleArea2 = calculateCercleArea(16.2);
// console.log(cercleArea2);




function createHTMLElement(tag = 'button',text = 'отправить', id = null) { // нужно сохранять порядок записи параметров
  const element = document.createElement(tag);
  if (id) {   // если id не null или undefined то присваиваем элементу id
    element.id = id; 
  }
  element.innerHTML = text;
  
  return element;
}

const h1element = createHTMLElement('h1', 'просто текст'); // аргументы идут в такомже порядке как и параметры
// console.log(h1element)                                  // если мы не хотим передавать аргументы, то мы можем использовать null
// document.body.append(h1element)

// const element = createHTMLElement();
// document.body.append(element)

function logArgsToControle() {
// console.log(arguments);
if (!arguments.length) { //1. если аргументов нет 
  return;                // то досрочно возвращаем завршение функции
}
for (let argument of arguments) {
  console.log(arguments);
}
console.log('Больше аргументов нет'); // когда аргументы закончились выводим это сообщение
}

logArgsToControle(); // 1. если аргументов нет то возвращаем undefined


// Function expression 

// sayHello(); - нельзя получить доступ к переменной до т ого как она была инициализированна

// const sayHello = function() {
//   console.log('Hello');
// }
// sayHello();
 
const sayBye = () => {   // у стрелонной функции нет параметра аргументов
  // console.log('Bye');
}
sayBye();



const brokenLinks = ['vk', 'youtybe', 'instagram', 'facebook'];
// https://vk.com

const fixLinksArray = (linksArray: string[]) => {  
  const correctLinks = [];                 // коллбэк функция - это функция переданная в другую функцию в качестве аргумента
  linksArray.forEach(function(brokenLink) {
    correctLinks.push('https://' + brokenLink + '.com');
  })
  return correctLinks;  
}

console.log(fixLinksArray(brokenLinks));