'use strict';

let user_icon = document.querySelector('.user-header__icon');
user_icon.addEventListener("click", function(e) {
    let user_menu = document.querySelector('.user-header__menu');
    user_menu.classList.toggle('_active');
});

//Скрываем выпадашку нажатием на любое место, кроме выпадашки
document.documentElement.addEventListener('click', function (e) {
    if(!e.target.closest(".user-header")) {
        let user_menu = document.querySelector('.user-header__menu');
        user_menu.classList.remove('_active'); 
    }
});

//Burger
let burger = document.querySelector('.icon-menu');
let body = document.querySelector('.menu__body');
burger.addEventListener("click", function(e) {
    let burger_active = document.querySelector('.icon-menu');
    burger_active.classList.toggle('_active');

    let body_active = document.querySelector('.menu__body');
    body_active.classList.toggle('_active');

});