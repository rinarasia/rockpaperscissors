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

window.onload = function() {
    const rockBtn = document.querySelector('#rock');
    rockBtn.addEventListener('click', playRock);

    const paperBtn = document.querySelector('#paper');
    paperBtn.addEventListener('click', playPaper);

    const scissorsBtn = document.querySelector('#scissors');
    scissorsBtn.addEventListener('click', playScissors);
};

function playRock() {
    playerSelection = "rock";
    console.log(playRound('rock'));
    document.getElementById("score").innerHTML = `Player Score: ${playerScore} Computer Score: ${computerScore}`;
    playPlayer(playerSelection);
    showRound(playerSelection);
};

function playPaper() {
    playerSelection = "paper";
    console.log(playRound('paper'));
    document.getElementById("score").innerHTML = `Player Score: ${playerScore}\nComputer Score: ${computerScore}`;
    playPlayer(playerSelection);
    showRound(playerSelection);
};

function playScissors() {
    playerSelection = "scissors";
    console.log(playRound('scissors'));
    document.getElementById("score").innerHTML = `Player Score: ${playerScore}\nComputer Score: ${computerScore}`;
    playPlayer(playerSelection);
    showRound(playerSelection);
};

function showRound(playerSelection) {
    const para = document.createElement("p");
    const text = document.createTextNode(`You played ${playerSelection} | Computer played ${computerSelection}`);
    para.appendChild(text);

    const element = document.getElementById("round");
    element.appendChild(para);    
}