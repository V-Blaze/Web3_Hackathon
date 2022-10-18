const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');

hamburger.addEventListener('click', (e) => {
	e.preventDefault();
	console.log('clicked');
	hamburger.classList.toggle('active');
	menu.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach((nav) =>
	nav.addEventListener('click', () => {
		hamburger.classList.remove('active');
		menu.classList.remove('active');
	})
);
