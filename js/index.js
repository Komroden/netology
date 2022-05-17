'use strict'
let input=document.getElementById('input');
let stars=document.querySelectorAll('.content__star');
let button =document.getElementById('button');
button.setAttribute('disabled','disabled')
stars.forEach(item=>item.addEventListener('click',handleSelect));
function handleSelect(event) {
    event.stopPropagation()
        event.target.classList.toggle('content__starHovered')


}
function handleWrite(event) {
    if(event.target.value !== " "){
        button.removeAttribute('disabled')
    }
}
input.addEventListener('change',handleWrite);
