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
    