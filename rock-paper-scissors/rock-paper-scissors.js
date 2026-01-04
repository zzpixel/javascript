const score = JSON.parse(localStorage.getItem("score")) || {
  wins: 0,
  losses: 0,
  ties: 0,
};

let isAutoPlaying = false;
document.querySelector(".autoplay-btn").addEventListener("click", () => {
  if (!isAutoPlaying) {
    isAutoPlaying = true;
    autoPlay();
  } else if (isAutoPlaying) {
    isAutoPlaying = false;
    autoPlay();
  }
});

function autoPlay() {
  if (isAutoPlaying) {
    const playInterval = setInterval(() => {
      const playerMove = playComputermove();
      playGame(playerMove);
      if (!isAutoPlaying) {
        clearInterval(playInterval);
      }
    }, 1000);
  }
}

// setInterval
// clearInterval

document.querySelector(".rock-btn").addEventListener("click", () => {
  playGame("Rock");
});
document.querySelector(".paper-btn").addEventListener("click", () => {
  playGame("Paper");
});
document.querySelector(".scissor-btn").addEventListener("click", () => {
  playGame("Scissors");
});

document.body.addEventListener("keydown", (event) => {
  if (event.key === "p") {
    playGame("Paper");
  } else if (event.key === "r") {
    playGame("Rock");
  } else if (event.key === "s") {
    playGame("Scissors");
  }
});

function updateScore() {
  document.querySelector(
    ".js-score"
  ).innerHTML = `Wins: ${score.wins}. Losses: ${score.losses}. Ties: ${score.ties}.`;
}

function playComputermove() {
  const randomNumber = Math.random();
  console.log(randomNumber);
  let computerMove = "";

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = "Rock";
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = "Paper";
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = "Scissors";
  }

  return computerMove;
}

function playGame(playerMove) {
  const computerMove = playComputermove();

  console.log(computerMove, playerMove);

  let result = "";
  if (computerMove === "Rock") {
    if (playerMove === "Rock") {
      result = "tie";
    }
    if (playerMove === "Paper") {
      result = "You Win";
    }
    if (playerMove === "Scissors") {
      result = "You Lose";
    }
  } else if (computerMove === "Paper") {
    if (playerMove === "Rock") {
      result = "You Lose";
    }
    if (playerMove === "Paper") {
      result = "tie";
    }
    if (playerMove === "Scissors") {
      result = "You Win";
    }
  } else if (computerMove === "Scissors") {
    if (playerMove === "Rock") {
      result = "You Win";
    }
    if (playerMove === "Paper") {
      result = "You Lose";
    }
    if (playerMove === "Scissors") {
      result = "tie";
    }
  }

  if (result === "You Win") {
    score.wins += 1;
  } else if (result === "You Lose") {
    score.losses += 1;
  } else if (result === "tie") {
    score.ties += 1;
  }

  localStorage.setItem("score", JSON.stringify(score));

  document.querySelector(".js-result").innerHTML = result;
  document.querySelector(
    ".js-moves"
  ).innerHTML = `You picked <img src="./images-rock-paper-scissors/${playerMove}-emoji.png" class="move-icon">. Computer picked <img src="./images-rock-paper-scissors/${computerMove}-emoji.png" class="move-icon">`;
  document.querySelector(
    ".js-score"
  ).innerHTML = `Wins: ${score.wins}. Losses: ${score.losses}. Ties: ${score.ties}.`;
}
