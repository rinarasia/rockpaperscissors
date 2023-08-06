// Define choices
const choices = ["rock","paper", "scissors"];

// Initialize Player and Computer score
let playerScore = 0;
let computerScore = 0;


// Play single round
function playRound(playerSelection) {

    const computerSelection = getComputerChoice();
    
    // Randomize Computer choice
    function getComputerChoice() {
        return choices[Math.floor(Math.random() * choices.length)];
    }

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
    console.log(playRound('rock'));
    document.getElementById("buttons").innerHTML = `Player Score: ${playerScore}\nComputer Score: ${computerScore}`;
};

function playPaper() {
    console.log(playRound('paper'));
    document.getElementById("buttons").innerHTML = `Player Score: ${playerScore}\nComputer Score: ${computerScore}`;
};

function playScissors() {
    console.log(playRound('scissors'));
    document.getElementById("buttons").innerHTML = `Player Score: ${playerScore}\nComputer Score: ${computerScore}`;
};