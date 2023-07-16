var navbar = document.querySelector('.header .navbar');

var menu = document.querySelector('#nav_bars');

menu.onclick = () =>
{
    // menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
};
