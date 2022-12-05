/*OUTLINE/REWRITE THE PROBLEM.

I must create a game of rock-paper-scissors that is to be played between a human and the computer. The game will be a best-of-five match, and the winner is the first player to reach three wins.

I will need to code an interface (which will be the console), a prompt for a user input of either rock, paper, or scissors, and a function that determines the computer's play (probably a random number generator), a function that will test for victory (conditional with three(?) branches), and an output to the console that reports the winner and loser.

ELEMENTS

I will need a basic html page (done), which links to script.js.

I will need a script.js file, which will contain the logic and functions for the game.
  specifically, i will need at least the following three functions:
    getComputerChoice(): randomly returns rock/paper/scissors;
    game(): contains the following function, as well as a prompt that reports the result of each match
      playRound: Test for victory, using two parameters: playerSelection, computerSelection;
    
PLAN

  enter game() function:
  initialize wins vars? Or is this done in the for-loop as an index?
    --don't we need two vars? compWins, humanWins?
  for loop 
    five rounds, index starts at zero and increments by one up to four.
    fn 1.) generate random computer move
    fn 2.) play round. return a string that will be console.logged. basically a big conditional statement
      -nine possible combinations, three of which result in ties, and six of which result in a victor.
        -if tie, go back to beginning
        -if victor, return victor to console, as well as the total match score. increment either compWins or humanWins, goto beginning of fn
  game ends when for-loop is exited:
    print "congrats" or "sorry"
    "play again?" (this might be challenging, idk)
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
  } else if (playerSelection === 'rock' && computerSelection === 'paper' 
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

//plays five rounds and prints the results back to the console.
function game() {
  for (let i = 0; i < 5; i++) {
    //declare human score
    //declare computer score
    const choice = getPlayerChoice();
    if (choice !== 'rock' && choice !== 'paper' && choice !== 'scissors') {
      return game(); //starts game over if invalid input is entered by user
    } else {
      console.log(playRound(choice, getComputerChoice()));}
  }
}

game(); //making this a fn call instead of a code block seems to be helpful, because it can be recursively called by itself.