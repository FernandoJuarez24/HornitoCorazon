//Efecto Scroll
let scrollPrevio = window.pageYOffset;
let home = document.querySelector('.home');

window.onscroll = () => {
	let scrollActual = window.pageYOffset
	//Mostrar y Ocultar Menu

	if(scrollPrevio > scrollActual){
		containerMenu.style.top = '0';
		containerMenu.style.transition = '0.5s';
	}else{
		containerMenu.style.top = '-60px';
		containerMenu.style.transition = '0.5s';
	}
	scrollPrevio = scrollActual;

	//Mostrar y Ocultar Estilos
	let arriba = window.pageYOffset;

	if(arriba <= 600){
		containerMenu.style.borderBottom = 'none'
		home.style.right = '-100%';
	}else{
		containerMenu.style.borderBottom = '3px solid #e40017'
		home.style.right = '20px';
		home.style.transition = '0.5s';
	}
}

home.addEventListener('click', () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

let abajo = document.querySelector('#abajo');

abajo.addEventListener('click', () => {
  document.body.scrollTop = 600;
  document.documentElement.scrollTop = 600;
});