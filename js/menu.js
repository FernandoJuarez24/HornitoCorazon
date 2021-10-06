//Menu de animacion
const burger = document.querySelector('.burger');
let menu = document.querySelector('.menu')
let activador = true;

burger.addEventListener('click', () =>{
    
    document.querySelector('.burger i').classList.toggle('fa-times');

    if(activador){
        menu.style.left = '0';
        menu.style.transition = '0.5s';

        activador = false;
    }else{
        activador = false;

        menu.style.left = '-100%';
        menu.style.transition = '0.5s';

        activador = true;
    }
});