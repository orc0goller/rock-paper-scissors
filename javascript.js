
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

    // Gets player and computer choice
    let playerSelection = prompt("What's your guess? (Rock, paper or scissors) ").toLowerCase();
    let computerSelection = getComputerChoice();

    // Returns who won
    let win;
    if (playerSelection === computerSelection) {
        return "It's a draw!";
    }
    else if (playerSelection === "rock" && computerSelection === "scissors") {
        return "Congratulations! You Win!";
    }
    else if (playerSelection === "paper" && computerSelection === "rock") {
        return "Congratulations! You Win!";
    }
    else if (playerSelection === "scissors" && computerSelection === "paper") {
        return "Congratulations! You Win!";
    }
    else {
        return "You Lose!";
    }
}