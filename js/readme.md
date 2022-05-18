# Форма отзывов с функционалом рейтинга.

**Может быть использована практически на любом сайте, где есть функционал отзывов.** 
Код представляет собой страницу html с разметкой самой формы, css файл со стилями, для элементов верстки,
js файл, который отвечает за валидацию и добавление интерактивности на страницу.
_Разберем подробнее код js файла._

`let input=document.getElementById('input');
let stars=document.querySelectorAll('.content__star');
let button =document.getElementById('button');`

Эта часть кода получает ссылки на элементы html и присваивает их переменным.
Ошибки в данном коде обычно бывают при использовании querySelectorAll, эта функция аргументом принимает селектор перед именем класса нужно ставить "."

`stars.forEach(item=>item.addEventListener('click',handleSelect));`

Данная часть кода методом forEach обходит массив stars, это массив(NodeList), потому что элементов
`.content__star` на странице у нас несколько. forEach при обходе массива, присваивает каждому элементу
слушатель события(addEventListener) клика(click) и указывает функцию коллбек (handleSelect).
Ошибки в данной части обычно возникают если у переменной к которой применяется forEach, отсутствует такой метод.

`function handleSelect(event) {
if(event.target.getAttribute('src')==='star.png'){
event.target.setAttribute("src",'star-gold.png')
return
}
if(event.target.getAttribute('src')==='star-gold.png'){
event.target.setAttribute("src",'star.png')
return
}
}`

Данная функция принимает аргумент event, который является элементом html, проверяет атрибут src(getAttribute('src')==='star.png') у элемента
и в зависимости от условий изменяет его, меняя неактивную звезду на активную setAttribute("src",'star.png').
Ошибки в данной части обычно возникают при ошибке в условиях проверки.

`input.addEventListener('change',handleWrite);`

Эта часть кода добавляет слушатель события изменения значения в инпуте и указывает функцию коллбек (handleWrite).

`function handleWrite(event) {
if(event.target.value.length !== 0){
button.removeAttribute('disabled')
}
}`

Данная функция проверяет что значение инпута не пустое(event.target.value.length !== 0) убирает атрибут disabled с кнопки, чтобы можно было отправить отзыв.