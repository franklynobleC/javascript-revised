/* reset button  */

//load  the score  object  into  the local storage
// default operator, if  the left side is  truthy, it would  use  the Left side, if  the left side is falsy, it would  use the right side. -->
let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  loses: 0,
  ties: 0
}

//score set for  html
updateScoreElement()
//check score type
/*
       if (!score ) {
         score = {
           wins: 0,
           loses: 0,
           ties: 0,
         };
       }
       */
let isAutoPlaying = false
let intervalId

//button upDateScoreElement
let btnUpdateScoreElement = document
  .querySelector('.js-button-reset')
  .addEventListener('click', () => {
    score.wins = 0
    score.loses = 0
    score.ties = 0
    localStorage.removeItem('score')
    updateScoreElement()
  })

//Button event for AutoPlay

let btnAutoPlayElement = document
  .querySelector('.js-button-autoplay')
  .addEventListener('click', () => {
    autoPlay()
  })

function autoPlay () {
  if (!isAutoPlaying) {
    intervalId = setInterval(function () {
      const playerMove = pickComputerMove()
      playGame(playerMove)
      updateScoreElement()
      console.log(intervalId)
    }, 3000)
    isAutoPlaying = true
  } else {
    clearInterval(intervalId)
    isAutoPlaying = false
  }
}

//event for   rock
let rockBtnElement = document
  .querySelector('.js-rock-button')
  .addEventListener('click', () => {
    playGame('rock')
  })

//event for Paper
let paperBtnElement = document
  .querySelector('.js-button-paper')
  .addEventListener('click', () => {
    playGame('paper')
  })

//event for scissors
let scissorsBtnElement = document
  .querySelector('.js-button-scissors')
  .addEventListener('click', () => {
    playGame('scissors')
  })
function playGame (playerMove) {
  const computerMove = pickComputerMove()

  //convert it  to javascript Object
  // JSON.parse(localStorage.getItem("score"));

  let result = ''

  if (playerMove === 'scissors') {
    if (computerMove === 'rock') {
      result = 'You lose.'
    } else if (computerMove === 'paper') {
      result = 'You win.'
    } else if (computerMove === 'scissors') {
      result = 'Tie.'
    }
  } else if (playerMove === 'paper') {
    if (computerMove === 'rock') {
      result = 'You win.'
    } else if (computerMove === 'paper') {
      result = 'Tie.'
    } else if (computerMove === 'scissors') {
      result = 'You lose.'
    }
  } else if (playerMove === 'rock') {
    if (computerMove === 'rock') {
      result = 'Tie.'
    } else if (computerMove === 'paper') {
      result = 'You lose.'
    } else if (computerMove === 'scissors') {
      result = 'You win.'
    }
  }

  if (result === 'You win.') {
    score.wins = score.wins + 1
  } else if (result === 'You lose.') {
    score.loses = score.loses + 1
  } else if (result === 'Tie.') {
    score.ties = score.ties + 1
  }

  //convert javascript Object to json string
  localStorage.setItem('score', JSON.stringify(score))
  updateScoreElement()
  /*
         <!-- alert(
          `You picked ${playerMove}. Computer picked ${computerMove}. ${result}
      `);*/

  document.querySelector('.js-result').innerHTML = result

  //display moves
  document.querySelector('.js-moves').innerHTML = `You
        <img src="images/${playerMove}-emoji.png" class="move-icon"/>
      <img src="images/${computerMove}-emoji.png" class="move-icon">computer`
}
//update  the score  and  display  in  html page
function updateScoreElement () {
  document.querySelector(
    '.js-score'
  ).innerHTML = ` Wins:${score.wins}, Losses:${score.loses}, Ties:${score.ties}`
}

function pickComputerMove () {
  const randomNumber = Math.random()

  let computerMove = ''

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = 'rock'
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = 'paper'
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = 'scissors'
  }

  return computerMove
}
