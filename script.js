/*
OUTLINE/REWRITE THE PROBLEM.


ELEMENTS

PLAN

PSEUDOCODE

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
    return console.log('It\'s a tie');
  } else if (
    playerSelection === 'rock' && computerSelection === 'paper' 
  || playerSelection === 'paper' && computerSelection === 'scissors'
  || playerSelection === 'scissors' && computerSelection === 'rock'
  ) {
    return console.log('You lose');
  } else return console.log('You win');
}

//print results of the round to the console
function printResults(userScore, computerScore) {
  console.log('user score: ' + userScore + '\ncomputer score: ' + computerScore);
}

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {

  button.addEventListener('click', () => {
    playRound(button.id, getComputerChoice())
  });
});