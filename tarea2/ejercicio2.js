const boton = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu-items');

boton.addEventListener('click', () => {
  menu.classList.toggle('show');
  const open = menu.classList.contains('show');
  boton.setAttribute('aria-expanded', open);
});