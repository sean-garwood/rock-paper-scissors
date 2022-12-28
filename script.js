/*
OUTLINE/REWRITE THE PROBLEM.

Add a results div.
  -should this be done via DOM manipulation?

Append results of each match to this div.

ELEMENTS

need to add a div to the DOM that will display results

Append the result of each round to the div.

PLAN

I will create a div in the DOM via a DOM method.

I will append text to the div with a DOM method

PSEUDOCODE

..button obj declarations
..event listeners added to buttons

create an empty div
append it to the body of the DOM

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

//need to create a DOM reference to the body so that we can append children to
//it
const body = document.querySelector('body');
//declare a variable results, which contains a reference to a new div DOM
//object
const results = document.createElement('div');
//append the newly-created div to the document
body.appendChild(results);

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {

  button.addEventListener('click', () => {
    playRound(button.id, getComputerChoice())
  });
});