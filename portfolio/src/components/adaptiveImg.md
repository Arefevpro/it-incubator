<!-- # Адаптив img

### Фоновые изображения
### Обязательные свойства:  `min-heigth` `max-width` `width: 100%`

 `background-repeat: no-repeat` фоновое изображение не повторяется, остаётся только одно внутри элемента.
 `background-position: -130px -80px;` перемещать  картинку в блоке котором она находится

`background-size: cover;` `background-size: contain;`

![](https://doka.guide/css/background-size/images/contain-and-cover-1200w.webp)

 `background-position: center;` - центрирует изображение (используют чаще всего)

 `background-clip` определяет, в каких областях будет находиться фоновая картинка и фоновый цвет блока.
  `background-attachment` определяет будет ли фон прокручиваться вместе со страницей или будет зафиксирован на одном месте. Часто используется для создания так называемого эффекта параллакса. -->


### Контентные изображения

`<img src=" " alt=" " />`
```javascript
img {
  max-width: 500px;
  width: 100%;
  height: 100%;
  object-fit: cover;
  aspect-ratio: 16 / 9;
  // object-position: center;
}

Контейнер в котором лежат изображения 

.wrap {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(1fr))
  grid-auto-rows: 250px;
  gap; 10px;
}


Для разных устройств

<picture>
<source media="(min-width: 800px)" srcset="webp"> от 800
<source media="(max-width: 799px)" srcset="webp"> до 799
<img src="jpeg" alt=" " >
</picture>
```