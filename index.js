window.addEventListener('mousedown', (event) => {
  const navToggle = document.querySelector('.toggle-nav');
  const menu = document.querySelector('.menu');
  if (event.target === navToggle) {
    menu.classList.add('show');
  } else if (event.target != navToggle && event.target.parentNode != menu) {
    menu.classList.remove('show');
  }
});
