function getComputerChoice() {
  if (Math.floor(Math.random() * 3) === 0) {
    return 'rock';
  } else if (Math.floor(Math.random() * 3) === 1) {
    return 'paper';
  } else return 'scissors';
}

//plays a round, returns a string reporting results
function playRound(playerSelection, computerSelection) {
  //nine possibilities, three ties, three wins, three losses
  if (playerSelection === computerSelection) {
    return 'It\'s a tie';
  } else if (
    playerSelection === 'rock' && computerSelection === 'paper' 
  || playerSelection === 'paper' && computerSelection === 'scissors'
  || playerSelection === 'scissors' && computerSelection === 'rock'
  ) {
    return 'You lose';
  } else return 'You win';
}

//print results of the round to the console
function printResults(userScore, computerScore) {
  return '\nuser score: ' + userScore + '\ncomputer score: ' + computerScore;
}

function checkScores(userScore, computerScore) {
  if (userScore < 5 && computerScore < 5) {
    return;
  } else {
    return true;
  }
}

function gameOver(userScore, computerScore) {
  if (userScore > computerScore) {
    return 'Game over. User wins!'
  } else return 'Game over. Computer wins!'
}

const body = document.querySelector('body');
const buttons = document.querySelectorAll('button');
let userScore = 0;
let computerScore = 0;
const results = document.createElement('div');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    body.appendChild(results);
    const result = playRound(button.id, getComputerChoice());
    if (result === 'You win' && computerScore < 5 && userScore < 5) {
      userScore++;
    } else if (result === 'You lose' && computerScore < 5 && userScore < 5) {
      computerScore++;
    }
    results.textContent = result + printResults(userScore, computerScore);
    if (checkScores(userScore, computerScore)) {
      results.textContent = result + printResults(userScore, computerScore) + ' ' + gameOver(userScore, computerScore);
    };
  });
});