// Selecciona el botón del menú y el contenedor del menú
const menuBtn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');

// Añade un listener para abrir/cerrar el menú
menuBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
});
