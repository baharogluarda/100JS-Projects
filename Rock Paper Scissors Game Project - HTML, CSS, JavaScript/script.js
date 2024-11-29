const buttons = document.querySelectorAll("button");
console.log(buttons);

const result = document.getElementById("result");

const myScore = document.getElementById("myScore");

const pcScore = document.getElementById("pcScore");

let playerScore = 0;
let computerScore = 0;

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    const gameResult = playRound(button.id, computerPlay());
    result.textContent = gameResult;
  });
});

function computerPlay() {
  const choices = ["rock", "paper", "scissors"];
  const randomChoice = Math.floor(Math.random() * choices.length);
  return choices[randomChoice];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "It's a tie!";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    playerScore++;
    myScore.textContent = playerScore;
    return "You win! " + playerSelection + " beats " + computerSelection;
  } else {
    computerScore++, (pcScore.textContent = computerScore);
    return "You lose! " + computerSelection + " beats " + playerSelection;
  }
}
