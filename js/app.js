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
let board, turn, winner


/*------------------------ Cached Element References ------------------------*/
const restartBtn = document.getElementById('reset')
const squares = document.querySelectorAll('section > div')
const message = document.getElementById('message') 




/*----------------------------- Event Listeners -----------------------------*/
squares.forEach((square) => {square.addEventListener("click", handleClick)})
resetBtn.addEventListener('click', init)


/*-------------------------------- Functions --------------------------------*/
init();

function init() {
  // message.textContent = "It is X's turn!"
  // restartBtn.setAttribute('hidden', true)
  // clear board
  board = [null, null, null, null, null, null, null, null, null] 
  // set turn for Player X which equals 1
  turn = 1
  // initialize winner variable
  winner = null
  render()
}

function render() {

}

function handleClick(event) {
  // Know what index the mouse clicks on
  // get index from id and make it into a number to do computation on it
  let sqIdx = parseInt(event.target.id.replace('sq', ''))
  // check to see if board is taken, if it is, return
  if (board[sqIdx] || winner) {
    return
  }
  // update board 
  board[sqIdx] = turn
  turn *= -1
  // state updated, so call render
  render()
}