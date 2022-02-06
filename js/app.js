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
squares.forEach((square) => {square.addEventListener("click", onClick)})
restartBtn.addEventListener('click', init)


/*-------------------------------- Functions --------------------------------*/
init();

function init() {
  // clear board
  board = [null, null, null, null, null, null, null, null, null] 
  // set turn for Player X which equals 1
  turn = 1
  // initialize winner variable
  winner = null
  render()
}

function render() { 
  // take what board looks like and displays it
  board.forEach((cell, idx) => {
    let letter
    let color 
    if (cell === 1) {
      letter = '❌'
      color = 'white'
    } else if (cell === -1) {
      letter = '⭕'
      color = "white"
    } else if (cell === null) {
      letter =  ""
      color = 'white'
    }
    squares[idx].innerText = letter
    squares[idx].style.background = color
  });
  if (!winner) {
    message.innerText = `It is ${turn === 1 ? "X" : "O"}'s turn!!`
  } else if (winner === "T") {
    message.innerText = `Tie Game!`
  } else {
    message.innerText = `Congratulations Player ${winner === 1 ? "X" : "O"}!`
    confetti.start(2000)
  }
}

function onClick(event) { //changing state of the board
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
  winner = getWinner()
  // state updated, so call render
  render()
}

function getWinner() {
  // use Math.abs to return absolute value of number
  // ❓ how do i use array instead of this logic??
  if (Math.abs(board[0] + board[1] + board[2]) === 3) return board[2];
  if (Math.abs(board[3] + board[4] + board[5]) === 3) return board[5];
  if (Math.abs(board[6] + board[7] + board[8]) === 3) return board[8];
  if (Math.abs(board[0] + board[3] + board[6]) === 3) return board[6];
  if (Math.abs(board[1] + board[4] + board[7]) === 3) return board[7];
  if (Math.abs(board[2] + board[5] + board[8]) === 3) return board[8];
  if (Math.abs(board[0] + board[4] + board[8]) === 3) return board[8];
  if (Math.abs(board[2] + board[4] + board[6]) === 3) return board[6];
  
  // check for tie
  if (board.includes(null)) {
    return null
  } else {
    return "T"
  }
}