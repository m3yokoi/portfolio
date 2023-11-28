'use strict';
//定数（ハンバーガーメニュー用）
const openBtn = document.querySelector('.openbtn');
const menuPanel = document.querySelector('.menu-panel');
const menuOptions = {
    duration: 1400,
    easing: 'ease',
    fill: 'forwards'
};

//クリックでメニューボタンの切り替えとメニューの出し入れ
openBtn.addEventListener('click', () => {
    openBtn.classList.toggle('active');
    menuPanel.classList.toggle('open');
});

//画面外クリックでメニューを閉じる
document.addEventListener('click', (e) => {
    if (e.target.closest('.menu-panel') || e.target.closest('.openbtn')) {
        ;
    } else {
        menuPanel.classList.remove('open');
        openBtn.classList.remove('active');
    }
});

//ローディングから画面遷移
const loading = document.querySelector('#loading');
const loadIcon = document.querySelector('.loading__image');
const gwrap = document.querySelector('.gnav__wrapper');

window.addEventListener('load', () => {

    if(window.matchMedia('(max-width:767px)').matches){
        loading.animate(
            {
                translate: [0, '0 -100vh'],
                opacity: [1, 1, 0]
            },{
                duration: 900,
                delay: 700,

                fill: 'forwards',
                easing: 'ease',
            }
        );
        gwrap.animate(
            {
            opacity: [0, 1]
        },{
            duration: 100,
            fill: 'forwards'
        });
        loadIcon.animate(
            {
            opacity: [1, 0]
        },{
            duration: 200,
            delay: 500,
            fill: 'forwards'
        });

    } else {

    loading.animate(
        {
            translate: [0, '100vw 0'],
        },{
            duration: 1000,
            delay: 700,
            fill: 'forwards',
            easing: 'ease-in',
        }
    );
        gwrap.animate(
            {
            opacity: [0, 1]
        },{
            duration: 1000,
            delay: 1700,
            fill: 'forwards'
        });
        loadIcon.animate(
            {
            opacity: [1, 0]
        },{
            duration: 200,
            delay: 500,
            fill: 'forwards'
        });
    }
});
