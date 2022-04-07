const selectionButton = document.querySelectorAll(".selection-button");
const round = document.querySelector(".round");
const outcome = document.querySelector(".outcome-text");
const showPoints = document.querySelector(".points");
const overlay = document.querySelector(".overlay");
const restartSign = document.querySelector(".restart-sign");
const restartBtn = document.querySelector(".restart-btn");

let playerPoints = 0;
let pcPoints = 0;
let roundCounter = 0;

selectionButton.forEach((button) => {
  button.addEventListener("click", function () {
    playRound(button.value);
  });
});

function playRound(playerChoice) {
  if (playerPoints < 5 && pcPoints < 5) {
    pcChoice = getPcPlay();
    roundCounter++;
    round.innerText = `Round : ${roundCounter}`;
    switch (true) {
      case playerChoice === pcChoice:
        outcome.innerText = `TIE! Two ${playerChoice}s is a draw`;
        break;
      case playerChoice === "rock" && pcChoice === "scissors":
      case playerChoice === "scissors" && pcChoice === "paper":
      case playerChoice === "paper" && pcChoice === "rock":
        outcome.innerText = `YOU WIN! Good luck! ${playerChoice} beats ${pcChoice}!`;
        playerPoints += 1;
        showPoints.innerText = `Your points: ${playerPoints} | PC points: ${pcPoints}`;
        break;
      default:
        outcome.innerText = `YOU LOSE! Tough luck! Sadly, ${pcChoice} beats ${playerChoice}!`;
        pcPoints += 1;
        showPoints.innerText = `Your points: ${playerPoints} | PC points: ${pcPoints}`;
    }
  } else {
    endGame(playerPoints, pcPoints);
  }
}
document.querySelector(".pc-image").classList.remove("img-animation");
function getPcPlay() {
  let pcChoice = Math.floor(Math.random() * 3);
  document.querySelector(".pc-image").classList.add("img-animation");
  if (pcChoice === 0) {
    document.querySelector(".pc-image").src = "./images/rock-01.svg";
    return "rock";
  }
  if (pcChoice === 1) {
    document.querySelector(".pc-image").src = "./images/paper-02.svg";
    return "paper";
  }
  if (pcChoice === 2) {
    document.querySelector(".pc-image").src = "./images/scissors-03.svg";
    return "scissors";
  }
}

function endGame(playerCounter, pcCounter) {
  overlay.style.display = "flex";
  if (playerCounter > pcCounter) restartSign.innerText = "winner";
  if (pcCounter > playerCounter) restartSign.innerText = "loser";
  restartBtn.addEventListener("click", function () {
    location.reload();
  });
}
