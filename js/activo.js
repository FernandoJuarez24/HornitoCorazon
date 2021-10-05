let enlace = document.querySelectorAll('.lista li a');

enlace.forEach((element) => {
	element.addEventListener('click', (event) => {
		enlace.forEach((link) => {
			link.classList.remove('activo');
		});
		event.target.classList.add('activo');
	});
});