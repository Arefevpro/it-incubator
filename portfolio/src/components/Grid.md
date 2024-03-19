# Grid  [гайд ](https://doka.guide/css/grid-guide/)

```javascript
grid-template-columns: repeat(4, 1fr); fr - столбцы будут тянуться на всю ширину
grid-template-rows: repeat(3, 1fr); fr - строки будут по размеру контента (если не указана высота контейнера)
```




`<img src=" " alt=" " />`

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

```