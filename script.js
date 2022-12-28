/*
OUTLINE/REWRITE THE PROBLEM.

Append results of each match to results.

ELEMENTS

need to add a div to the DOM that will display results

Append the result of each round to the div.

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
  console.log('user score: ' + userScore + '\ncomputer score: ' + computerScore);
}


const body = document.querySelector('body');

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {

  button.addEventListener('click', () => {
    const results = document.createElement('div');
    body.appendChild(results);
    const result = playRound(button.id, getComputerChoice());
    results.textContent = result;
  });
});