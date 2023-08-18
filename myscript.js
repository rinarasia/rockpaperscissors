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

    checkRoundNum();
}

function playComputer(computerSelection) {
    if (computerSelection === "rock") {
        const comprock = document.getElementById("compRock");
        comprock.classList.add("down");
    } else if (computerSelection === "paper") {
        const comppaper = document.getElementById("compPaper");
        comppaper.classList.add("down");
    } else if (computerSelection === "scissors") {
        const compscissors = document.getElementById("compScissors");
        compscissors.classList.add("down");
    }
}

function resetComputer() {
    if (computerSelection === "rock") {
        const comprock = document.getElementById("compRock");
        comprock.classList.remove("down");
    } else if (computerSelection === "paper") {
        const comppaper = document.getElementById("compPaper");
        comppaper.classList.remove("down");
    } else if (computerSelection === "scissors") {
        const compscissors = document.getElementById("compScissors");
        compscissors.classList.remove("down");
    }

    if (playerSelection === "rock") {
        const playerRock = document.getElementById("rock");
        playerRock.classList.remove("up");
    } else if (playerSelection === "paper") {
        const playerPaper = document.getElementById("paper");
        playerPaper.classList.remove("up");
    } else if (playerSelection === "scissors") {
        const playerScissors = document.getElementById("scissors");
        playerScissors.classList.remove("up");
    }

    enableButtons();
}


function playPlayer(playerSelection) {
    if (playerSelection === "rock") {
        const playerRock = document.getElementById("rock");
        playerRock.classList.add("up");
    } else if (playerSelection === "paper") {
        const playerPaper = document.getElementById("paper");
        playerPaper.classList.add("up");
    } else if (playerSelection === "scissors") {
        const playerScissors = document.getElementById("scissors");
        playerScissors.classList.add("up");
    }
    disableButtons();
}

function disableButtons() {
    const buttons = document.querySelectorAll('button');    
    buttons.forEach(button => {
        button.classList.add("disable");
      });
}

function enableButtons() {
    const buttons = document.querySelectorAll('button');    
    buttons.forEach(button => {
        button.classList.remove("disable");
      });
}

function checkRoundNum() {
    if (playerScore < numOfRounds && computerScore < numOfRounds) {
        setTimeout(resetComputer, 3000);
    } else if (playerScore === numOfRounds || computerScore === numOfRounds) {
        console.log("Game over!!!");
        setTimeout(resetComputer, 3000);
        setTimeout(disableButtons, 4000);
    }
}