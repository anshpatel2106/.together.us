const bar= document.getElementById('bar');
const close= document.getElementById('close');
const nav= document.getElementById('navbar');
if(bar){
    bar.addEventListener('click',() =>{
        nav.classList.add('active');
    });
}
if(close){
    close.addEventListener('click',() =>{
        nav.classList.remove('active');
    });
}
















// scrool up======
const header = document.querySelector("header");

window.addEventListener ("scroll", function() {
    header.classList.toggle ("sticky", window.scrollY >0);
});

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');