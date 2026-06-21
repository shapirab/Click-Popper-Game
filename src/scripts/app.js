const container = document.querySelector('.container');
const startBtn = document.getElementById('start-btn');
const happyImg = document.getElementById('happy');

let boxNum = 16;
let boxes = [];
//similar approach for positive icons
let pointValues = [50,75,100,150,200,250,-10,-50,-200];

startBtn.addEventListener('click', ()=>{
    console.log('game starts');
    drawBoard();
    highlightBox();
    //highlightBoxContent(boxes[3], 100, happyImg);
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

function highlightBox(){
    let scoreValue = setPointValue();
    let box = setActiveBox();
    let emoji = happyImg;

    highlightBoxContent(box, scoreValue, emoji);
    box.addEventListener('click', (e) => {});

}

function highlightBoxContent(box, scoreValue, emoji){
    box.classList.remove('box');
    box.className = 'highlighted';
    emoji.className = 'showEmoji';
    box.innerText = scoreValue;   
    console.log(emoji)
    box.appendChild(emoji);
}

function setPointValue(){
    let pointIndex = Math.floor(Math.random() * pointValues.length);
    return pointValues[pointIndex];
}

function setActiveBox(){
    let boxIndex = Math.floor(Math.random() * boxes.length);
    return boxes[boxIndex];
}