/*
OUTLINE/REWRITE THE PROBLEM.

track player scores. End the game whenever a player reaches five wins.

ELEMENTS

two vars: playerScore, computerScore
while loop that runs while playerScore <5 or computerScore <5
create/append div to the body of the document

PLAN


PSEUDOCODE

with each click of a button, append the result of each match to the div

*/

//randomly generates one of three strings: 'rock', 'paper', or 'scissors'.
function getComputerChoice() {
  if (Math.floor(Math.random() * 3) === 0) {
    return 'rock';
  } else if (Math.floor(Math.random() * 3) === 1) {
    return 'paper';
  } else {return 'scissors';}
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
    return null;
  } else {
    return gameOver(userScore, computerScore);
  }
}

function gameOver(userScore, computerScore) {
  if (userScore >= 5) {
    return 'Game over. User wins!'
  }
  if (computerScore >= 5) {
    return 'Game over. Computer wins!'
  }
}

const body = document.querySelector('body');
const buttons = document.querySelectorAll('button');
let userScore = 0;
let computerScore = 0;

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const results = document.createElement('div');
    body.appendChild(results);
    const result = playRound(button.id, getComputerChoice());
    if (result === 'You win') {
      userScore++;
    } else if (result === 'You lose') {
      computerScore++;
    }
    results.textContent = result + printResults(userScore, computerScore);
    if (checkScores(userScore, computerScore)) {
      results.textContent = gameOver(userScore, computerScore);
    };
  });
});