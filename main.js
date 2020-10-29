"use strict";

const MENU = document.querySelector('#menu');

MENU.addEventListener('click', () => {
    const SIDE_MENU = document.querySelector('#side-menu');
    const CLOSE_X = document.querySelector('#close');

    SIDE_MENU.style.animation = "1s slide_menu_start";
    SIDE_MENU.style.right = "0";
    SIDE_MENU.classList.remove('display_none');
    SIDE_MENU.classList.add('display_content');
    
    CLOSE_X.addEventListener('click', () => {
        SIDE_MENU.style.animation = "1s slide_menu_end";
        SIDE_MENU.style.right = "-250px";
        setTimeout(() => {
            SIDE_MENU.classList.remove('display_content');
            SIDE_MENU.classList.add('display_none');
        }, 1000)
    });
});