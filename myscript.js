//define choices
const choices = ["rock","paper", "scissors"];

//get player and computer choices
const playerSelection = "rock";
const computerSelection = getComputerChoice();

//randomize computer choice
function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}

//play single round
function playRound(playerSelection, computerSelection) {
    const win = `You win! Your choice ${playerSelection} beats ${computerSelection}.`;
    const lose = `Oh no, you lost. Computer's ${computerSelection} beats your ${playerSelection}.`;
    const tie = `You have tied with Computer. ${playerSelection} is the same as ${computerSelection}`;
    if (playerSelection == "rock") {
        switch (computerSelection) {
            case "rock":
                return tie;
                break;
            case "paper":
                computerScore++;
                return lose;
                break;
            case "scissors":
                playerScore++;
                return win;
                break;
        }
    }
}

//call game to play
playRound();