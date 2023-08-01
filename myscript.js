//define choices
const choices = ["rock","paper", "scissors"];

//get player and computer choices
const playerSelection = "rock";
const computerSelection = getComputerChoice();

//initialize player and computer score
let playerScore = 0;
let computerScore = 0;

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

//play game of 5 rounds
function game() {
    for (let i = 1; i <= 5; i++) {
            const computerSelection = getComputerChoice(choices);
            console.log(playRound(playerSelection, computerSelection));
    }
    console.log(`Player Score: ${playerScore}`);
    console.log(`Computer Score: ${computerScore}`);
    if (playerScore === computerScore){
        console.log("You and Computer tied this game.")
    } else if (playerScore > computerScore) {
        console.log("You win this game!!!");
    } else {
        console.log("Computer wins this game.");
    }
}

//call game to play
game();