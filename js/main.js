const span = document.querySelector('#totalScore');

let totalScore = 0;
const todoScore = Number(localStorage.getItem('todo'));
const calcScore = Number(localStorage.getItem('calc'));
const birdScore = Number(localStorage.getItem('bird'));

console.log(todoScore)

totalScore = todoScore + calcScore + birdScore;

span.innerHTML = totalScore

// 랜덤게임 시작하기

const links = ['todo.html', 'calc.html', 'bird.html', 'speed.html'];

const randomNum = Math.floor(Math.random() * 4);
console.log(randomNum)

const startRandomHandler = () => {
    location.href = links[randomNum];
}

const startBtn = document.querySelector('#startRandomBtn');
startBtn.addEventListener('click', startRandomHandler);


// toggle 버튼 구현

const toggleBtn = document.querySelector('.toggleBtn');
const ul = document.querySelector('ul');

toggleBtn.addEventListener('click', () => {
    ul.classList.toggle("show");
})