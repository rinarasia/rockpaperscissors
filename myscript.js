// Define choices
const choices = ["rock","paper", "scissors"];

// Initialize Player and Computer choices
let playerSelection;
let computerSelection;

// Initialize Player and Computer score
let playerScore = 0;
let computerScore = 0;

// Set number of rounds
let roundNum = 5;


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
    
    if (playerSelection === choices[0]) {
        switch (computerSelection) {
            case choices[0]:
                playComputer(computerSelection);
                return tie;
                break;
            case choices[1]:
                playComputer(computerSelection);
                computerScore++;
                return lose;
                break;
            case choices[2]:
                playComputer(computerSelection);
                playerScore++;
                return win;
                break;
        }
    } else if (playerSelection === choices[1]) {
        switch (computerSelection) {
            case choices[0]:
                playComputer(computerSelection);
                playerScore++;
                return win;
                break;
            case choices[1]:
                playComputer(computerSelection);
                return tie;
                break;
            case choices[2]:
                playComputer(computerSelection);
                computerScore++;
                return lose;
                break;
        }
    } else if (playerSelection === choices[2]) {
        switch (computerSelection) {
            case choices[0]:
                playComputer(computerSelection);
                computerScore++;
                return lose;
                break;
            case choices[1]:
                playComputer(computerSelection);
                playerScore++;
                return win;
                break;
            case choices[2]:
                playComputer(computerSelection);
                return tie;
                break;
        }
    }
}


// On load, allow Player Selection
window.onload = function() {
    const rockBtn = document.querySelector('#rock');
    rockBtn.addEventListener('click', playRock);

    const paperBtn = document.querySelector('#paper');
    paperBtn.addEventListener('click', playPaper);

    const scissorsBtn = document.querySelector('#scissors');
    scissorsBtn.addEventListener('click', playScissors);
};

// Player choose Rock
function playRock() {
    playerSelection = choices[0];
    console.log(playRound('rock'));
    document.getElementById('score').innerHTML = `Player Score: ${playerScore} Computer Score: ${computerScore}`;
    playPlayer(playerSelection);
    showRound(playerSelection);
};

// Player choose Paper
function playPaper() {
    playerSelection = choices[1];
    console.log(playRound('paper'));
    document.getElementById('score').innerHTML = `Player Score: ${playerScore}\nComputer Score: ${computerScore}`;
    playPlayer(playerSelection);
    showRound(playerSelection);
};

// Player choose Scissors
function playScissors() {
    playerSelection = choices[2];
    console.log(playRound('scissors'));
    document.getElementById('score').innerHTML = `Player Score: ${playerScore}\nComputer Score: ${computerScore}`;
    playPlayer(playerSelection);
    showRound(playerSelection);
};

// Display results of round
function showRound(playerSelection) {
    const para = document.createElement('p');
    const text = document.createTextNode(`You played ${playerSelection} | Computer played ${computerSelection}`);
    para.prepend(text);

    const element = document.getElementById('round');
    element.prepend(para);

    checkRoundNum();
}

// Animate Computer choice
function playComputer(computerSelection) {
    if (computerSelection === choices[0]) {
        const comprock = document.getElementById('compRock');
        comprock.classList.add('down');
    } else if (computerSelection === choices[1]) {
        const comppaper = document.getElementById('compPaper');
        comppaper.classList.add('down');
    } else if (computerSelection === choices[2]) {
        const compscissors = document.getElementById('compScissors');
        compscissors.classList.add('down');
    }
}

// Animate Player choice
function playPlayer(playerSelection) {
    if (playerSelection === choices[0]) {
        const playerRock = document.getElementById('rock');
        playerRock.classList.add('up');
    } else if (playerSelection === choices[1]) {
        const playerPaper = document.getElementById('paper');
        playerPaper.classList.add('up');
    } else if (playerSelection === choices[2]) {
        const playerScissors = document.getElementById('scissors');
        playerScissors.classList.add('up');
    }
    disableChoices();
}

// Reset Player and Computer choices to original position
function resetChoices() {
    if (computerSelection === choices[0]) {
        const comprock = document.getElementById('compRock');
        comprock.classList.remove('down');
    } else if (computerSelection === choices[1]) {
        const comppaper = document.getElementById('compPaper');
        comppaper.classList.remove('down');
    } else if (computerSelection === choices[2]) {
        const compscissors = document.getElementById('compScissors');
        compscissors.classList.remove('down');
    }

    if (playerSelection === choices[0]) {
        const playerRock = document.getElementById('rock');
        playerRock.classList.remove('up');
    } else if (playerSelection === choices[1]) {
        const playerPaper = document.getElementById('paper');
        playerPaper.classList.remove('up');
    } else if (playerSelection === choices[2]) {
        const playerScissors = document.getElementById('scissors');
        playerScissors.classList.remove('up');
    }

    enableChoices();
}

// Check round and set timing of Player and Computer choice reset
function checkRoundNum() {
    if (playerScore < roundNum && computerScore < roundNum) {
        setTimeout(resetChoices, 3000);
    } else if (playerScore === roundNum || computerScore === roundNum) {
        console.log("Game over!!!");
        setTimeout(resetChoices, 3000);
        setTimeout(disableChoices, 3001);
    }
}

// Disable Player choices
function disableChoices() {
    const buttons = document.querySelectorAll('button');    
    buttons.forEach(button => {
        button.classList.add('disable');
      });
}

// Enable Player choices
function enableChoices() {
    const buttons = document.querySelectorAll('button');    
    buttons.forEach(button => {
        button.classList.remove('disable');
      });
}