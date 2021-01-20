"use strict";

let tab = document.querySelector('.slide-box'),
    showTab = document.querySelectorAll('.btn-slide'),
    showTabBg = document.querySelector('.btn-slide'),
    content = document.querySelectorAll('.header-skill'),
    contentBg = document.querySelectorAll('.header-skill-bg'),
    activeSlide = document.querySelectorAll('.active-slide'),
    btnMapWindow = document.querySelector('.map-window-btn'),
    btnClose = document.querySelector('.btn-close'),
    modal = document.querySelector('.modal');


function hide(a) {
    for (let i = a; i < content.length; i++) {
        if (content[i].classList.contains('header-skill')) {
            content[i].classList.remove('header-skill');
            content[i].classList.add('hide');
        }
    }
}
hide(1);

function show(b) {
    if (content[b].classList.contains('hide')) {
        content[b].classList.remove('hide');
        content[b].classList.add('header-skill');
    }
}
let numbersSlide = 1;
let switchSlide = setInterval(function () {
    for (let i = numbersSlide; i < 3; i++) {
        if (i == 0) {
            hide(0);
            hideBg(0);
            show(i);
            showBg(i);
            numbersSlide = 1;
            break;
        } else if (i == 1) {
            hide(0);
            hideBg(0);
            show(i);
            showBg(i);
            numbersSlide = 2;
            break;
        } else {
            hide(0);
            hideBg(0);
            show(i);
            showBg(i);
            numbersSlide = 0;
            break;
        }
    }
}, 7000);

function hideBg(a) {
    for (let i = a; i < content.length; i++) {
        if (activeSlide[i].classList.contains('active-slide')) {
            activeSlide[i].classList.remove('active-slide');
            activeSlide[i].classList.add('noactive-slide');
        }
    }
}
hideBg(1);

function showBg(b) {
    if (activeSlide[b].classList.contains('noactive-slide')) {
        activeSlide[b].classList.remove('noactive-slide');
        activeSlide[b].classList.add('active-slide');
    }
}
tab.addEventListener('click', function (event) {
    let target = event.target;
    if (target && target.classList.contains('btn-slide')) {
        for (let i = 0; i < showTab.length; i++) {
            if (target == showTab[i]) {
                hide(0);
                hideBg(0);
                numbersSlide = i;
                show(i);
                showBg(i);
                break;
            }
        }
    }
});
btnMapWindow.addEventListener('click', function () {
    modal.classList.remove('hide');
});
btnClose.addEventListener('click', function () {
    modal.classList.add('hide');
});