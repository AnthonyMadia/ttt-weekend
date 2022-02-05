/*-------------------------------- Constants --------------------------------*/



/*---------------------------- Variables (state) ----------------------------*/
let squares, turn, winner 
let turnCount = 1
let isWinner = false


/*------------------------ Cached Element References ------------------------*/
const gameUpdate = document.querySelector('#message')
const resetBtn = document.querySelector('#reset-btn')
const board = document.querySelector('.board')

console.log(resetBtn)
console.log(gameUpdate)



/*----------------------------- Event Listeners -----------------------------*/
board.addEventListener('click', onClick)


/*-------------------------------- Functions --------------------------------*/
init();

function init() {
  return gameUpdate.textContent = "It is X's turn!"
}

function onClick(evt) {
  console.log(evt)
}

function reset(evt) {

}