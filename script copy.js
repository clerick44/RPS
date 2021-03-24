var computerSelection;
var playerSelection;
var playerWin = 0;
var computerWin = 0;

function computerPlay() {
  switch (Math.floor(Math.random() * 3 + 1)) {
    case 1:
      computerSelection = "ROCK";
      break;
    case 2:
      computerSelection = "PAPER";
      break;
    case 3:
      computerSelection = "SCISSORS";
      break;
  }
}
function playerInput() {
  //This section error checks player input
  playerSelection = prompt("Choose: Rock, Paper or Scissors").toUpperCase();
  if (
    playerSelection == "ROCK" ||
    playerSelection == "PAPER" ||
    playerSelection == "SCISSORS"
  ) {
    return playerSelection;
  } else {
    playerInput();
  }
}
function playRound() {
  playerInput();
  computerPlay();
  if (playerSelection == computerSelection) {
    alert("It's a tie!");
  } else if (
    (playerSelection == "ROCK" && computerSelection == "SCISSORS") ||
    (playerSelection == "PAPER" && computerSelection == "ROCK") ||
    (playerSelection == "SCISSORS" && computerSelection == "PAPER")
  ) {
    playerWin++;
    alert(`You win! ${playerSelection} beats ${computerSelection}`);
  } else {
    computerWin++;
    alert(`You lose! ${computerSelection} beats ${playerSelection}`);
  }
}

function finalResult() {
  if (playerWin == computerWin) {
    alert(
      `It's a tie! You won ${playerWin} and the computer won ${computerWin}`
    );
    // playerSelection = 0;
    // computerWin = 0;
  } else if (playerWin > computerWin) {
    alert(
      `Congratulations! You won ${playerWin} games. The computer only won ${computerWin}.`
    );
    // playerWin = 0;
    // computerWin = 0;
  } else {
    alert(
      `Sorry! You only won ${playerWin} games. The computer won ${computerWin}.`
    );
    // playerWin = 0;
    // computerWin = 0;
  }
}

function game() {
  for (let roundCount = 0; roundCount < 5; roundCount++) {
    playRound();
  }
  finalResult();
  playerWin = 0;
  computerWin = 0;
}
game();
