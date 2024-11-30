const button = document.getElementById("roll-button");

const diceEl = document.getElementById("dice");

const rollHistory = document.getElementById("roll-history");

let history = [];

button.addEventListener("click", () => {
  rollDice();
});

const rollDice = () => {
  const rollResult = Math.floor(Math.random() * 6) + 1;

  diceEl.style.transform = `rotateX(${Math.random() * 720}deg) rotateY(${
    Math.random() * 720
  }deg)`;

  setTimeout(() => {
    resetDice(rollResult);
  }, 1000);
};

function resetDice(rollResult) {
  const diceFace = diceFaceChoice(rollResult);

  diceEl.style.transition = "transform 0.2s ease-in-out";
  diceEl.style.transform = "rotateX(0deg) rotateY(0deg)";

  setTimeout(() => {
    diceEl.innerHTML = diceFace;

    diceEl.style.transition = "transform 1s ease-in-out";

    history.push(rollResult);
    updateRollHistory();
  }, 0);
}

function updateRollHistory() {
  rollHistory.innerHTML = "";
  for (let i = 0; i < history.length; i++) {
    const listItem = document.createElement("li");
    listItem.innerHTML = `Roll ${i + 1}: <span>${diceFaceChoice(
      history[i]
    )}</span>`;
    rollHistory.appendChild(listItem);
  }
}

function diceFaceChoice(rollResult) {
  switch (rollResult) {
    case 1:
      return "&#9856;";
    case 2:
      return "&#9857;";
    case 3:
      return "&#9858;";
    case 4:
      return "&#9859;";
    case 5:
      return "&#9860;";
    case 6:
      return "&#9861;";
    default:
      return "";
  }
}
