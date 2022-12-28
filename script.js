/*OUTLINE/REWRITE THE PROBLEM.

add event listeners to each of the buttons.
have the player make their choice based on which button is pressed.
in other words, have getPlayerChoice return either 'rock', 'paper', or scissors

need to do something like what the drum kit did:
define an array-like object that selects all of the buttons in the document
so that I can loop through them and add an event listener to each.

or, more trivially, just add an event listener to the window that listens for
clicks, then returns the text of the button element that was selected, and
passes that to the playRound function.



ELEMENTS

three buttons
alerts win/lose/tie depending on result of the round

PLAN

I need to declare three variables, one for each button element in the document.
i need to store the value of document.querySelector('#rock') into the rock
variable/object.


that might look something like this:

PSEUDOCODE


declare three button vars
add event listeners to each that returns some function on click.
  --what is that function?

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

/*
function game() {
  let userScore = 0;
  let computerScore = 0; 

  if 'It\'s a tie') {
    console.log('It\'s a tie');
    printResults(userScore, computerScore);
  } else if (result === 'You lose') {
    computerScore += 1;
    console.log('You lose');
    printResults(userScore, computerScore);
  } else {
    userScore += 1;
    console.log('You win');
    printResults(userScore, computerScore)
  }
}
*/

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {

  button.addEventListener('click', () => {
    playRound(button.id, getComputerChoice())
  });
});