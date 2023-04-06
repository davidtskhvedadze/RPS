function getComputerChoice() {
 
    const choices = ['Rock', 'Paper', 'Scissors'];
    return choices[Math.floor(Math.random() * 3)];
  
  };
  
  let computerWin = 0;
  let playerWin = 0;
  
  
  function playRound(playerSelection, computerSelection) {
      let result;
  
      if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
          result = `Tie! Go again!`;
      } else if (playerSelection.toLowerCase() === `rock` && computerSelection.toLowerCase() === `paper`) {
          computerWin++;
          result = "You Lose! Paper beats Rock";
      } else if (playerSelection.toLowerCase() === `paper` && computerSelection.toLowerCase() === `scissors`) {
          computerWin++;
          result ="You Lose! Scissors beats Paper";
      } else if (playerSelection.toLowerCase() === `scissors` && computerSelection.toLowerCase() === `rock`) {
          computerWin++;
          result = "You Lose! Rock beats Scissors";
      } else {
          playerWin++;
          result = `You Win! ${playerSelection[0].toUpperCase()}${playerSelection.slice(1).toLowerCase()} beats ${computerSelection}!`
      }
  
      return result;
  
  };
  
  
  const playerButtons = document.querySelectorAll('.player-choice');
  const resultDiv = document.querySelector('#result');
  const scoreDiv = document.querySelector('#scores');
  
  playerButtons.forEach(button => {
    button.addEventListener('click', () => {
      const playerChoice = button.id;
      const computerChoice = getComputerChoice();
      const roundResult = playRound(playerChoice, computerChoice);

      resultDiv.textContent = roundResult
      
      scoreDiv.textContent = `Player: ${playerWin} - Computer: ${computerWin}`;
      if (playerWin === 5 || computerWin === 5) {
        const winner = playerWin > computerWin ? 'Player' : 'Computer';
        resultDiv.textContent += ` ${winner} wins the game!`;
        playerWin = 0;
        computerWin = 0;
      }
    });
  });
  