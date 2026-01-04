const amount = 12;
const numbers = [];
const match = new Audio('orb.mp3')
let bgmusic = new Audio('background-music.mp3')
const winsound = new Audio('gamewin.mp3')
const board = document.querySelector(".board");
window.onload = setInterval(backgroundMusicLoop, 1000 / 10);

function backgroundMusicLoop() {
    bgmusic.play()
    if (bgmusic.paused == true) {
        bgmusic.play()
    }
}

board.style.gridTemplateColumns = `repeat(6, 1fr)`;

for (let i = 1; i <= amount; i++) {
  numbers.push(i, i);
}

for (let i = 1; i <= amount * 2; i++) {
  const rand = Math.floor(Math.random() * numbers.length);

  const div = document.createElement("div");
  div.innerHTML = `<span>${numbers[rand]}</span>`;
  board.appendChild(div);

  numbers.splice(rand, 1);

  div.addEventListener("click", (event) => {
    if (
      event.target.classList.contains("hidden") ||
      event.target.classList.contains("showing")
    ) {
      return;
    }

    if (board.querySelectorAll(".showing").length === 2) {
      return;
    }

    event.target.classList.add("showing");

    check();
  });
}

function check() {
  const cards = board.querySelectorAll(".showing");

  if (cards.length === 2) {
    const first = cards[0];
    const second = cards[1];
    if (first.textContent === second.textContent) {
      setTimeout(() => {
        first.classList.remove("showing");
        second.classList.remove("showing");

        first.classList.add("hidden");
        second.classList.add("hidden");
        match.play()
        checkIsDone();
      }, 1500);
    } else {
      setTimeout(() => {
        first.classList.remove("showing");
        second.classList.remove("showing");
      }, 1500);
    }
  }
}

function checkIsDone() {
  const cards = board.querySelectorAll("div:not(.hidden)");

  if (!cards.length) {
    winsound.play()
    const jsConfetti = new JSConfetti();
    jsConfetti.addConfetti();
  }
}
