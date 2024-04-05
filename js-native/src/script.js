const brokenLinks = ['vk', 'youtybe', 'instagram', 'facebook'];
// https://vk.com

const fixLinksArray = (linksArray) => {  
  const correctLinks = [];                 // коллбэк функция - это функция переданная в другую функцию в качестве аргумента
  linksArray.forEach(function(brokenLink) {
    const fixedLink = 'https://' + brokenLink + '.com';
    correctLinks.push(fixedLink);
  })
  return correctLinks;  
}

console.log(fixLinksArray(brokenLinks));