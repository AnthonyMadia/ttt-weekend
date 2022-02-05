/*-------------------------------- Constants --------------------------------*/


/*---------------------------- Variables (state) ----------------------------*/
let squares, turn, winner 
let turnCount = 1
let isWinner = false


/*------------------------ Cached Element References ------------------------*/
const gameUpdate = document.querySelector('#message')
const resetBtn = document.querySelector('#reset-btn')
const board = document.querySelector('.board')

console.log(gameUpdate, resetBtn, board)



/*----------------------------- Event Listeners -----------------------------*/
board.addEventListener('click', onClick)
resetBtn.addEventListener('click', resetGame)


/*-------------------------------- Functions --------------------------------*/
init();

function init() {
  board = ['null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null'];
  gameUpdate.textContent = "It is X's turn!"
  resetBtn.setAttribute('hidden', true)
  
}

function onClick(evt) {
  console.log(evt)
}

function resetGame(evt) {

}
