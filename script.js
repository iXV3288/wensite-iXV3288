document.addEventListener('DOMContentLoaded', function () {
    var menuToggle = document.querySelector('.menu-toggle');
    var menu = document.querySelector('.menu');

    menuToggle.addEventListener('click', function () {
        if (menu.style.left === '0px') {
            menu.style.left = '-250px';
        } else {
            menu.style.left = '0px';
        }
    });
});

function toggleMenu() {
    var menu = document.querySelector('.menu');
    if (menu.style.left === '0px') {
        menu.style.left = '-250px'; // cache le menu
    } else {
        menu.style.left = '0px'; // affiche le menu
    }
}
