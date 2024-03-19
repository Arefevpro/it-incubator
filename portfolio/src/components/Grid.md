# Grid  [гайд ](https://doka.guide/css/grid-guide/)

```javascript
grid-template-columns: repeat(4, 1fr); fr - столбцы будут тянуться на всю ширину
grid-template-rows: repeat(3, 1fr); fr - строки будут по размеру контента (если не указана высота контейнера)
```

[![2024-03-19-11-49-05.png](https://i.postimg.cc/90BktpBQ/2024-03-19-11-49-05.png)](https://postimg.cc/q6zQp2YP)

```javascript
const GridContainer = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(4, 265px);
  grid-template-rows: repeat(3, 200px);
  gap: 16px;

  grid-template-areas: 
  "one two three four"
  "five five six eigth"
  "five five seven eigth"
`;
Расположение элементов пример №1

const GridItem = styled.div`
  background-color: rgba(14, 74, 226, 0.8);

  &:first-child {
    grid-area: one;
  }

  &:nth-child(2) {
    grid-area: two;
  }

  &:nth-child(3) {
    grid-area: three;
  }

  &:nth-child(4) {
    grid-area: four;
  }
  
  &:nth-child(5) {
    grid-area: five;
  }

  &:nth-child(6) {
    grid-area: six;
  }

  &:nth-child(7) {
    grid-area: seven;
  }

  &:last-child {
    grid-area: eigth;
  }
`;

Расположение элементов пример №2
----------------------------------------------------------------
grid-area row-start / column-start / row-end / column-end


const GridItem = styled.div`
  background-color: rgba(14, 74, 226, 0.8);

 &:first-child {
    grid-area: 1/1/2/2;
  }

  &:nth-child(2) {
    grid-area: 1/2/2/3;
  }

  &:nth-child(3) {
    grid-area: 1/3/2/4;
  }

  &:nth-child(4) {
    grid-area: 1/4/2/4;
  }
  
  &:nth-child(5) {
    grid-area: 2/1/4/3;              // через span можно указать сколько ячеек будет 
    // grid-area: 2/1/span 2/span 2; // занимать элемент
  }

  &:nth-child(6) {
    grid-area: 2/3/3/4;
  }

  &:nth-child(7) {
    grid-area: 3/3/4/4;
  }

  &:last-child {
    grid-area: 2/4/4/4;
  }
`;

```