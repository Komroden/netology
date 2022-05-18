'use strict'
let input=document.getElementById('input');
let stars=document.querySelectorAll('.content__star');
let button =document.getElementById('button');
stars.forEach(item=>item.addEventListener('click',handleSelect));
function handleSelect(event) {
    console.log(event)
    if(event.target.getAttribute('src')==='star.png'){
        event.target.setAttribute("src",'star-gold.png')
        return
    }
    if(event.target.getAttribute('src')==='star-gold.png'){
        event.target.setAttribute("src",'star.png')
        return
    }
}
function handleWrite(event) {
    if(event.target.value.length !== 0){
        button.removeAttribute('disabled')
    }
}
input.addEventListener('change',handleWrite);
