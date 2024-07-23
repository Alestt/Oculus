'use strict'

const tabItem = document.querySelectorAll('.tabs__btn-item');
const tabContent = document.querySelectorAll('.tabs__content-item');

tabItem.forEach(function(element) {
    element.addEventListener('click', open);
})

function open(evt) {
    const tabTarget = evt.currentTarget;
    const button = tabTarget.dataset.button;

    // при клике у всех убираем классы active
    tabItem.forEach(function(item) {
        item.classList.remove('tabs__btn-item--active');
    });

    tabContent.forEach(function(item) {
        item.classList.remove('tabs__content-item--active');
    });

    // тому, на кого нажали добавим класс active
    tabTarget.classList.add('tabs__btn-item--active');

    // находим по id и добавляем кдасс active
    document.querySelector(`#${button}`).classList.add('tabs__content-item--active');
}