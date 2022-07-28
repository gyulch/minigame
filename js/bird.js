const container = document.querySelector('.sky-wrap');
const containerField = container.getBoundingClientRect()
const span = document.querySelector('#score-num');
const saveBtn = document.querySelector('#saveScoreBtn');
console.log(containerField)

let score = 0;
const localScore = Number(localStorage.getItem('bird'));
score += localScore;
span.innerHTML = score;

const createRandomNum = (min, max) => {
   return (`${Math.floor(Math.random() * (max - min)) + min}px`)
}

const addBirdIcon = (num) => {
    for(let i=0; i<num; i++) {
        // <img src='../images/bird.png'></img>
        const img = document.createElement('img');
        img.setAttribute('class', 'bird-icon');
        img.setAttribute('src', 'images/bird.png');
        img.style.position = 'absolute';
        img.style.width = '100px';

        // 랜덤위치 설정
        img.style.top = createRandomNum(containerField.top, containerField.height);
        img.style.left = createRandomNum(containerField.left, containerField.width-100);

        container.appendChild(img);
    }
}
addBirdIcon(10);


const bird = document.querySelectorAll('.bird-icon');
console.log(bird)

const birdClickHandler = (e) => {
    // console.log(e.target)
    e.target.remove();
    addScoreHandler(0.5);
}

const eventHandler = () => {
    for(let i of bird) {
        i.addEventListener('click', birdClickHandler)
    }
}
eventHandler();

saveBtn.addEventListener('click', () => {saveScoreHandler('bird', score)})