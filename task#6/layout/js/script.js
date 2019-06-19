let menu = document.getElementsByClassName('menu'),
    li = document.createElement('li'),
    bg = document.getElementsByTagName('body'),
    liItem = document.getElementsByClassName('menu-item'),
    title = document.getElementsByClassName('title'),
    column = document.getElementsByClassName('column'),
    adv = document.getElementsByClassName('adv');
    prompter = document.querySelector('#prompt');

bg[0].style.background = "url('img/apple_true.jpg')";
li.classList.add('menu-item');
li.innerHTML = 'Пятый пункт';
menu[0].appendChild(li);    
menu[0].insertBefore(liItem[2],liItem[1]);
title[0].innerHTML = 'Мы продаем только подлинную технику Apple';
// column[1].removeChild(adv[0]);
adv[0].remove();


let yourOpinion = prompt("Ваше отношение к технике Apple?");

prompter.innerHTML = yourOpinion;




     


