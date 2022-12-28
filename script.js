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

I need to rewrite the getPlayerChoice function to return the value of the button
that is being clicked instead of a prompt into the console.

that might look something like this:

fn gPC(args?) {
  store the contents of the button clicked into a variable called choice and
  return it.
}

*/

//randomly generates one of three strings: 'rock', 'paper', or 'scissors'.
function getComputerChoice() {
  if (Math.floor(Math.random() * 3) === 0) {
    return 'rock';
  } else if (Math.floor(Math.random() * 3) === 1) {
    return 'paper';
  } else {return 'scissors';}
}

//prompts the user for a choice of rock, paper, or scissors
function getPlayerChoice() {
  return prompt('Rock, paper, or scissors?', 'rock').toLocaleLowerCase();
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
  } else {return 'You win';}
}


//print results of the round to the console
function printResults(userScore, computerScore) {
  console.log('user score: ' + userScore + '\ncomputer score: ' + computerScore);
}

//plays five rounds and prints the results back to the console.
function game() {
  let userScore = 0;
  let computerScore = 0; 

  const choice = getPlayerChoice();
  if (choice !== 'rock' && choice !== 'paper' && choice !== 'scissors') {
    return game(); //starts game over if invalid input is entered by user
  } else {
    let result = playRound(choice, getComputerChoice());
    if (result === 'It\'s a tie') {
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
}

game(); //making this a fn call instead of a code block seems to be helpful, because it can be recursively called by itself.