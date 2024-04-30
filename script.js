const bar = document.getElementById('bar');
const navbar = document.getElementById('navbar');
const closing = document.getElementById('close');

if (bar) {
	bar.addEventListener('click', () => {
		navbar.classList.add('active');
	});
}
if (close) {
	closing.addEventListener('click', () => {
		navbar.classList.remove('active');
	});
}
