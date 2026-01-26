let btn = document.queryselector('.menu-btn');
let menu = document.queryselector('nav');

btn.addEventListener('click', toggleMenu);

function toggleMenu() {
    menu.classList.toggle('hide');
    btn.classList.toggle('change')
}