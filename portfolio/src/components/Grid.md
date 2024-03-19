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

----------------------------------------------------------------
grid-area row-start / column-start / row-end / column-end


const GridItem = styled.div`
  background-color: rgba(14, 74, 226, 0.8);

  &:first-child {
    grid-column: 1/1;
    grid-row: 1/2;
  }

  &:nth-child(2) {
    grid-column: 2/3;
    grid-row: 1/2;
  }

  &:nth-child(3) {
    grid-column: 3/4;
    grid-row: 1/2;
  }

  &:nth-child(4) {
    grid-column: 4/5;
    grid-row: 1/2;
  }
  
  &:nth-child(5) {
    grid-column: 1/3;
    grid-row: 2/5;
  }

  &:nth-child(6) {
    grid-column: 3/4;
    grid-row: 2/3;
  }

  &:nth-child(7) {
    grid-column: 3/4;
    grid-row: 3/5;
  }

  &:last-child {
    grid-column: 4/5;
    grid-row: 2/5;
  }
`;

```