const container = document.querySelector('.container');
const startBtn = document.getElementById('start-btn');
const happyImg = document.getElementById('happy');

let boxNum = 16;
let boxes = [];

startBtn.addEventListener('click', ()=>{
    console.log('game starts');
    drawBoard();
    highlightBox(boxes[3], 100, happyImg);
});

function drawBoard(){
    container.removeChild(startBtn);
    let boardContainer = document.createElement('div');
    boardContainer.className = 'board--container';
    container.appendChild(boardContainer);
    for(let i = 0; i < boxNum; i++){
        let box = document.createElement('div');
        box.className = 'box';
        box.innerText = i + 1;
        boardContainer.appendChild(box);
        boxes.push(box);
    }
}

function highlightBox(box, scoreValue, emoji){
    box.classList.remove('box');
    box.className = 'highlighted';
    emoji.className = 'showEmoji';
    box.innerText = scoreValue;   
    console.log(emoji)
    box.appendChild(emoji);
}