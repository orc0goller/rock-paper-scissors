// Variables that keep track of wins
let playerWins = 0;
let computerWins = 0;
// Declare player and computer selection
let playerSelection;
let computerSelection;

// Returns either "Rock", "Paper" or "Scissors"
function getComputerChoice() {
    let number = Math.floor(Math.random() * 3);

    switch(number) {
        case 0:
            return "rock";
        
        case 1:
            return "paper";

        case 2:
            return "scissors";
    }
}

// Play one round of rock, paper & scissors
function playRound() {

    // Get player and computer choices
    playerSelection = prompt("What's your guess? (Rock, paper or scissors) ").toLowerCase();
    computerSelection = getComputerChoice();

    console.clear();
    // Add point to winner
    if (playerSelection === computerSelection) {
        console.log("It's a Draw!");
    }
    else if (playerSelection === "rock" && computerSelection === "scissors") {
        playerWins++;
        console.log("You Won!");
    }
    else if (playerSelection === "paper" && computerSelection === "rock") {
        playerWins++;
        console.log("You Won!");
    }
    else if (playerSelection === "scissors" && computerSelection === "paper") {
        playerWins++;
        console.log("You Won!");
    }
    else {
        computerWins++;
        console.log("You Lost!");
    }
}

// Play rock, paper & scissors, best of 5 versus the computer
function game() {
    for (let round = 0; round < 5; round++) {
        playRound();
        console.log(`SCORE: ${playerWins}-${computerWins}`);
    }

    // Prints the winner
    if (playerWins > computerWins) {
        console.log(`You WIN the BO5!`);
    }
    else if (computerWins > playerWins) {
        console.log(`You LOSE the BO5!`);
    }
    else {
        console.log(`The BO5 is a Draw!`);
    }
}

// Starts playing rock, paper & scissors
game();