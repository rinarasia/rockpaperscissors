// Define choices
const choices = ["rock","paper", "scissors"];

// Initialize Variables
let playerSelection;
let computerSelection;

// Initialize Player and Computer score
let playerScore = 0;
let computerScore = 0;

// Set number of rounds
let numOfRounds = 5;


// Randomize Computer choice
function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}

// Play single round
function playRound(playerSelection) { 

    computerSelection = getComputerChoice();

    const win = `You win! Your choice ${playerSelection} beats ${computerSelection}.`;
    const lose = `Oh no, you lost. Computer's ${computerSelection} beats your ${playerSelection}.`;
    const tie = `You have tied with Computer. ${playerSelection} is the same as ${computerSelection}`;
    
    if (playerSelection == "rock") {
        switch (computerSelection) {
            case "rock":
                playComputer(computerSelection);
                return tie;
                break;
            case "paper":
                playComputer(computerSelection);
                computerScore++;
                return lose;
                break;
            case "scissors":
                playComputer(computerSelection);
                playerScore++;
                return win;
                break;
        }
    } else if (playerSelection == "paper") {
        switch (computerSelection) {
            case "rock":
                playComputer(computerSelection);
                playerScore++;
                return win;
                break;
            case "paper":
                playComputer(computerSelection);
                return tie;
                break;
            case "scissors":
                playComputer(computerSelection);
                computerScore++;
                return lose;
                break;
        }
    } else if (playerSelection == "scissors") {
        switch (computerSelection) {
            case "rock":
                playComputer(computerSelection);
                computerScore++;
                return lose;
                break;
            case "paper":
                playComputer(computerSelection);
                playerScore++;
                return win;
                break;
            case "scissors":
                playComputer(computerSelection);
                return tie;
                break;
        }
    }
}
