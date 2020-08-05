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

// функция IBG для фоновой фулл-скрин картинки
function ibg(){
    $.each($('.ibg'), function(index, val) {
        if($(this).find('img').length>0){
            $(this).css('background-image','url("'+$(this).find('img').attr('src')+'")');
        }
    });
}
ibg();

//Slider
$(document).ready(function(){
    $('.main-slider__body').slick({
        prevArrow: '<div class="control-main-slider__arrow_prev"></div>',
        nextArrow: '<div class="control-main-slider__arrow_next"></div>',
    });
  });