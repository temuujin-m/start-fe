const $box = document.querySelector('.box');
const $bug = document.querySelector('#bug');
const $point = document.querySelector('#point');
const $life = document.querySelector('#life');

const bugWidth = $bug.offsetWidth;
const bugHeight = $bug.offsetHeight;
const bugSpeed = 1000; // 1000 = 1sec

const boxWidth = 400 - bugWidth;
const boxHeight = 400 - bugHeight;

let intervalID = 0;

let point = 0;
let life = 10;

function getRandomNumer(max){
    return Math.floor(Math.random() * max);
}

function moveBug(){
    const randomX = getRandomNumer(boxWidth);
    const randomY = getRandomNumer(boxHeight);

    $bug.style.left = `${randomX}px`;
    $bug.style.top = `${randomY}px`;

    $bug.style.display = 'block';

}

function startBug(){
    clearInterval(intervalID);
    intervalID = setInterval(moveBug, bugSpeed);
}

function hitBug(event){
    point++;
    $point.innerHTML = point;
    
    $bug.style.display = 'none';
    
    clearInterval(intervalID);
    startBug();
    
    event.stopPropagation();
}

function minusLife(){
    life--;
    $life.innerHTML = life;
    
    if(life === 0){
        alert('game over');
    }
}

function init(){
    $bug.addEventListener('click', hitBug);
    $box.addEventListener('click', minusLife);

    startBug();
}

init();