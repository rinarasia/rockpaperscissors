// Define choices
const choices = ["rock","paper", "scissors"];

// Initialize Player and Computer score
let playerScore = 0;
let computerScore = 0;

let playerSelection;
let computerSelection;

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
    } else if (playerSelection == "paper") {
        switch (computerSelection) {
            case "rock":
                playerScore++;
                return win;
                break;
            case "paper":
                return tie;
                break;
            case "scissors":
                computerScore++;
                return lose;
                break;
        }
    } else if (playerSelection == "scissors") {
        switch (computerSelection) {
            case "rock":
                computerScore++;
                return lose;
                break;
            case "paper":
                playerScore++;
                return win;
                break;
            case "scissors":
                return tie;
                break;
        }
    }
}
/*
// Play game of 5 rounds
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

// Call game to start
game();



    const para = document.createElement("p");
    const text = document.createTextNode(`You played rock | Computer played ${computerSelection}`);
    para.appendChild(text);

    const element = document.getElementById("round");
    element.appendChild(para);
*/


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
    showRound(playerSelection);
};

function playPaper() {
    playerSelection = "paper";
    console.log(playRound('paper'));
    document.getElementById("score").innerHTML = `Player Score: ${playerScore}\nComputer Score: ${computerScore}`;
    showRound(playerSelection);
};

function playScissors() {
    playerSelection = "scissors";
    console.log(playRound('scissors'));
    document.getElementById("score").innerHTML = `Player Score: ${playerScore}\nComputer Score: ${computerScore}`;
    showRound(playerSelection);
};

function showRound(playerSelection) {
    const para = document.createElement("p");
    const text = document.createTextNode(`You played ${playerSelection} | Computer played ${computerSelection}`);
    para.appendChild(text);

    const element = document.getElementById("round");
    element.appendChild(para);
}