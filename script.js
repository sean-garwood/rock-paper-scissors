/*OUTLINE/REWRITE THE PROBLEM.

remove logic that plays five rounds


ELEMENTS

PLAN

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
  } else {return 'You win';}
}

//prompts the user for a choice of rock, paper, or scissors
function getPlayerChoice() {
  return prompt('Rock, paper, or scissors?', 'rock').toLocaleLowerCase();
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