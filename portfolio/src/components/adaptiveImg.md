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
  height: 500px;
  object-fit: cover;
  object-position: center;
}
```