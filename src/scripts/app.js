const container = document.querySelector('.container');
const startBtn = document.getElementById('start-btn');
const happyImg = document.getElementById('happy');

let boxNum = 16;
let boxes = [];
//similar approach for positive icons
let pointValues = [50,75,100,150,200,250,-10,-50,-200];
let score = 0;

let scoreDisplay = document.createElement('span');
scoreDisplay.innerText = score;

startBtn.addEventListener('click', ()=>{
    drawBoard();
    highlightBox(setActiveBox());
    score = 0;
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

    let scoreContainer = document.createElement('div');
    scoreContainer.innerText = 'Score: ';
    container.appendChild(scoreContainer);
    scoreContainer.appendChild(scoreDisplay);

}

function highlightBox(box){
    let scoreValue = setPointValue();
    let emoji = happyImg;

    highlightBoxContent(box, scoreValue, emoji);

   addClick(box, scoreValue);
}

function addClick(box, scoreValue){
    box.addEventListener('click', (e) => {
        resetBox(box);
        highlightBox(setActiveBox());
        score += scoreValue;
        scoreDisplay.innerText = score;
    }, {once: true});
}

function resetBox(box){
    let boxIndex = boxes.indexOf(box);
    let child = box.querySelector('.showEmoji');
    if(child){
        child.remove();
    }
    box.classList.remove('highlighted');
    box.className = 'box';
     box.innerText = boxIndex + 1;
}

function highlightBoxContent(box, scoreValue, emoji){
    box.classList.remove('box');
    box.className = 'highlighted';
    emoji.className = 'showEmoji';
    box.innerText = scoreValue;   
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