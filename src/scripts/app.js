const container = document.querySelector('.container');
const startBtn = document.getElementById('start-btn');
let boxNum = 16;
console.log(container)
startBtn.addEventListener('click', ()=>{
    console.log('game starts');
    drawBoard();
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
    }
    console.log(container)

}