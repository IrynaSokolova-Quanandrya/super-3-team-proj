const hb = document.querySelector('.header-hamburger');
const menu = document.querySelector('.header');

hb.addEventListener('click', function() {
    menu.classList.toggle('active');
})

