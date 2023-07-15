// Variables that keep track of wins
let playerWins = 0;
let computerWins = 0;
let score = `${playerWins}-${computerWins}`;
// Declare player and computer selection
let playerSelection;
let computerSelection;

const buttons = document.querySelectorAll(".main button");
const results = document.querySelector(".main #results");

buttons.forEach((button) => {
    button.addEventListener("click", playRound);
});

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
function playRound(event) {

    // Get player and computer choices
    playerSelection = event.target.textContent.toLowerCase();
    computerSelection = getComputerChoice();

    // Add point to winner
    if (playerSelection === computerSelection) {
        return;
    }
    else if (playerSelection === "rock" && computerSelection === "scissors") {
        playerWins++;
    }
    else if (playerSelection === "paper" && computerSelection === "rock") {
        playerWins++;
    }
    else if (playerSelection === "scissors" && computerSelection === "paper") {
        playerWins++;
    }
    else {
        computerWins++;
    }

    // Prints score 
    score = `${playerWins}-${computerWins}`;
    results.textContent = `Player ${score} Computer`;

    // Prints the winner of the series
    if (isBestOfWinner(5)) {
        if (playerWins > computerWins) {
            results.textContent = `Player Wins!`;
        }
        else {
            results.textContent = `Computer Wins!`;
        }
        resetScore();
    }
}

// Checks if anyone won the Best Of X series
function isBestOfWinner(rounds) {
    if (playerWins >= rounds || computerWins >= rounds) {
        return true;
    }
    else {
        return false;
    }
}

function resetScore() {
    playerWins = 0;
    computerWins = 0;
}

// Play rock, paper & scissors, best of 5 versus the computer
function game() {

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