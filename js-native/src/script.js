
function createHTMLElement(tag, text, id) {
  const element = document.createElement('tag');
  element.id ='id';
  element.innerHTML = 'text';
  
  return element;
}

const h1element = createHTMLElement('h1', 'header1', 'text');
console.log(h1element)