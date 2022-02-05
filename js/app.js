/*-------------------------------- Constants --------------------------------*/

const winArr = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
]

/*---------------------------- Variables (state) ----------------------------*/
// 1) Define the required variables used to track the state of the game:
  // None of these variables will need to hold a value when they are defined
  // 1.1) Use an array to represent the squares on the board.    
  // 1.2) Use a turn variable to track whose turn it is.
  // 1.3) Use a winner variable to represent three different game states:
	  // a player that won
	  // a tie has occured
	  // or a game that is still in play.
let squares, turn, winner, player, isWinner, playerName


/*------------------------ Cached Element References ------------------------*/
// 2) Store cached element references on the page that will be accessed in code more than once in variables to make code more concise, readable, and performant:

let restartBtn = document.querySelector('#restart-btn')
let gameBoard = document.querySelector('#board')

// 2.1) Store the 9 elements that represent the squares on the page.
	  // You may want to give each square a class name in your HTML to make this easier!
// 2.2) Store the element that displays the game status on the page
let message = document.querySelector('#message') 




/*----------------------------- Event Listeners -----------------------------*/
restartBtn.addEventListener('click', init)
squares.addEventListener('click', onClick)
gameBoard.addEventListener("click", playyerTurn)



/*-------------------------------- Functions --------------------------------*/
init();

function init() {
  message.textContent = "It is X's turn!"
  restartBtn.setAttribute('hidden', true)
  squares = ['null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null'];
  turn = 1
  player = -1
  winner = null
  isWinner = false
  render()
  checkWin()
}

