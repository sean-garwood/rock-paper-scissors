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

  console: game starts with greeting: "Let's play rock-paper-scissors!"
  enter game() function:
  initialize wins vars? Or is this done in the for-loop as an index?
    --don't we need two vars? compWins, humanWins?
  for loop until wins=3 for either player
    fn 1.) generate random computer move
    fn 2.) prompt for input: "Choose one: rock, paper, or scissors."
      need to convert to lowercase, build in exceptions, i.e. "That is not a valid choice" if input != one of r, p, or s.
    fn 3.) test for victory, using comp move and human move as params
      -nine possible combinations, three of which result in ties, and six of which result in a victor.
        -if tie, go back to beginning
        -if victor, return victor to console, as well as the total match score. increment either compWins or humanWins, goto beginning of fn
  game ends when for-loop is exited:
    print "congrats" or "sorry"
    "play again?" (this might be challenging, idk)

PSEUDOCODE

Function declarations at the top

fn 1: getComputerChoice //randomly generates one of three strings: 'rock', 'paper', or 'scissors'.*/

function getComputerChoice() {}