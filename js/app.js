/*-------------------------------- Constants --------------------------------*/


/*---------------------------- Variables (state) ----------------------------*/
// 1) Define the required variables used to track the state of the game:
  // None of these variables will need to hold a value when they are defined
  // 1.1) Use an array to represent the squares on the board.    
  // 1.2) Use a turn variable to track whose turn it is.
  // 1.3) Use a winner variable to represent three different game states:
	  // a player that won
	  // a tie has occured
	  // or a game that is still in play.
let squares, turn, winner, player


/*------------------------ Cached Element References ------------------------*/
// 2) Store cached element references on the page that will be accessed in code more than once in variables to make code more concise, readable, and performant:
let gameUpdate = document.querySelector('#message') //game status
let restartBtn = document.querySelector('#restart-btn')
let gameBoard = document.querySelector('#board')

// 2.1) Store the 9 elements that represent the squares on the page.
	  // You may want to give each square a class name in your HTML to make this easier!






/*----------------------------- Event Listeners -----------------------------*/
board.addEventListener('click', onClick)
restartBtn.addEventListener('click', init)


/*-------------------------------- Functions --------------------------------*/
init();

function init() {
  gameUpdate.textContent = "It is X's turn!"
  // restartBtn.setAttribute('hidden', true)
  
}

function createGame() {
  board = ['null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null']
  turn = 1
  player = -1
  winner = null
}
function render() {

}
function onClick(evt) {
  
  
}

function checkWin() {
  if (!board === null) {
    gameUpdate.textContent = "Tie Game"
  }
}

