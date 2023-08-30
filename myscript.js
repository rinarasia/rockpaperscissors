// Define choices
const choices = ["rock","paper", "scissors"];

// Initialize Player and Computer choices
let playerSelection;
let computerSelection;

// Initialize Player and Computer score
let playerScore = 0;
let computerScore = 0;

// Set number of rounds
let round = 0;
let roundNum = 5;

// Set Player and Computer names
let player = "Littlefoot";
let computer = "Pterra";

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


// On load, show points and allow Player Selection
window.onload = function() {
    document.getElementById('playerScore').innerHTML = `${player} Points: ${playerScore}`;
    document.getElementById('computerScore').innerHTML = `${computer} Points: ${computerScore}`;

    const elements = document.getElementsByClassName('name');
    Array.prototype.forEach.call(elements, function (element) {
        element.innerHTML = `${player}`;
    });

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
    updateScore();
    playPlayer(playerSelection);
    showRound(playerSelection);
};

// Player choose Paper
function playPaper() {
    playerSelection = choices[1];
    console.log(playRound('paper'));
    updateScore();
    playPlayer(playerSelection);
    showRound(playerSelection);
};

// Player choose Scissors
function playScissors() {
    playerSelection = choices[2];
    console.log(playRound('scissors'));
    updateScore();
    playPlayer(playerSelection);
    showRound(playerSelection);
};

// Update score on scoreboard
function updateScore() {
    document.getElementById('playerScore').innerHTML = `${player} Points: ${playerScore}`;
    document.getElementById('computerScore').innerHTML = `${computer} Points: ${computerScore}`;
}

// Display results of round in table
function showRound(playerSelection) {
    round++;

    const row = document.createElement('tr');
    const roundTable = document.createElement('td');
    const roundText = document.createTextNode(`${round}`);
    
    const player = document.createElement('td');
    const playerText = document.createTextNode(`${playerSelection}`);

    const computer = document.createElement('td');
    const computerText = document.createTextNode(`${computerSelection}`);
    
    const rowClose = document.createElement('tr');
    
    roundTable.append(roundText);
    player.append(playerText);
    computer.append(computerText);

    const table = document.getElementById('round');
    table.append(roundTable, computer, player, rowClose);

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
        let red = computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1);
        let blue = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);

        document.getElementById('redColumn').innerHTML = `${red}`;
        document.getElementById('blueColumn').innerHTML = `${blue}`;
        setTimeout(resetChoices, 3000);

    } else if (playerScore === roundNum) {
        document.getElementById('redColumn').innerHTML = "You win :) Game over!";
        playAgain();
        setTimeout(resetChoices, 3000);
        setTimeout(disableChoices, 3001);

    } else if (computerScore === roundNum) {
        document.getElementById('redColumn').innerHTML = "You lose :( Game over!";
        playAgain();
        setTimeout(resetChoices, 3000);
        setTimeout(disableChoices, 3001);
    }
}

// Disable Player choices
function disableChoices() {
    const buttons = document.querySelectorAll('button.playerChoice');    
    buttons.forEach(button => {
        button.classList.add('disable');
      });
}

// Enable Player choices
function enableChoices() {
    const buttons = document.querySelectorAll('button.playerChoice');    
    buttons.forEach(button => {
        button.classList.remove('disable');
      });
}

// Show Play Again button
function playAgain() {
    document.getElementById('blueColumn').innerHTML = "";

    let button = document.createElement('button');
    button.innerHTML = "Play again?";
    button.classList.add('refresh');

    let results = document.getElementById('blueColumn');
    results.appendChild(button);

    button.addEventListener("click", function() {
        window.location.reload();
    });
}