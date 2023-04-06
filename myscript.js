function getComputerChoice() {
 
const choices = ['Rock', 'Paper', 'Scissors'];
return choices[Math.floor(Math.random() * 3)];

};

let playerWin = 0;
let computerWin = 0; 


function playRound(playerSelection, computerSelection) {

    if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
        return `Tie! Go again!`;
    } else if (playerSelection.toLowerCase() === `rock` && computerSelection.toLowerCase() === `paper`) {
        computerWin++;
        return "You Lose! Paper beats Rock";
    } else if (playerSelection.toLowerCase() === `paper` && computerSelection.toLowerCase() === `scissors`) {
        computerWin++;
        return "You Lose! Scissors beats Paper";
    } else if (playerSelection.toLowerCase() === `scissors` && computerSelection.toLowerCase() === `rock`) {
        computerWin++;
        return "You Lose! Rock beats Scissors";
    } else {
        playerWin++;
        return `You Win! ${playerSelection[0].toUpperCase()}${playerSelection.slice(1).toLowerCase()} beats ${computerSelection}!`
    }

};

function game() {
    for(let i = 0; i < 5; i++) {
    const playerSelection = prompt("Enter your choice: Rock, Paper or Scissors");
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
    }

    if(playerWin > computerWin) {
        return `Player Wins!`;
    } else {
        return `Computer Wins!`
    }

};


console.log(game());