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