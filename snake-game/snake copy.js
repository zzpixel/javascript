const width = 21;
const height = 20;

const snake = [3, 2, 1, 0];
let head = snake[0];
let direction = "right";
let interval;
let isGameOver = false;
let random;

const board = document.querySelector(".board");

board.style.gridTemplateColumns = `repeat(${width}, 1fr)`;

let rightBoundaries = [];
let leftBoundaries = [];

for (let i = 0; i < height; i++) {
  rightBoundaries.push(i * width);
}

for (let i = 0; i <= height; i++) {
  leftBoundaries.push(i * width - 1);
}

function createBoard() {
  for (let i = 0; i < width * height; i++) {
    if (i % 2===0) {
    const div = document.createElement("div");
    const divs = board.querySelectorAll("div");
    board.appendChild(div);
    // div.innerHTML = i;

  } else {
    const div = document.createElement("div");
    div.classList.add('odd');
    const divs = board.querySelectorAll("div");
    board.appendChild(div);
    // div.innerHTML = i;
  }

}
  setRandom();
  snakeColor();
}


function snakeColor() {
  const divs = board.querySelectorAll('div');
  divs.forEach((div) => div.classList.remove("snake", "head"));
  snake.forEach((num) => divs[num].classList.add("snake"));
  divs[head].classList.add("head");
}

window.addEventListener("keydown", (event) => {
  event.preventDefault();

  switch (event.key) {
    case "w":
    case "ArrowUp":
      move("up");
      break;
    case "d":
    case "ArrowRight":
      move("right");
      break;
    case "s":
    case "ArrowDown":
      move("down");
      break;
    case "a":
    case "ArrowLeft":
      move("left");
      break;
  }

  startAuto();
});

function move(dir) {
  if (isGameOver) {
    return;
  }

  if (head === random) {
    setRandom()
  }

  const divs = board.querySelectorAll("div");

  if (dir === "up") {
    if (direction === "down") {
      return;
    }

    if (!divs[head]) {
      gameOver();
    }
    head -= width;
  } else if (dir === "right") {
    if (direction === "left") {
      return;
    }

    if (leftBoundaries.includes(head)) {
      gameOver();
    }
    head++;
  } else if (dir === "left") {
    if (direction === "right") {
      return;
    }

    if (rightBoundaries.includes(head)) {
      gameOver();
    }
    head--;
  } else if (dir === "down") {
    if (direction === "up") {
      return;
    }
    if (!divs[head]) {
      gameOver();
    }
    head += width;
  }

  direction = dir;
  snake.unshift(head);
  snake.pop();
  snakeColor();
}

function startAuto() {
  clearInterval(interval);
  interval = setInterval(() => move(direction), 200);
}

function setRandom() {
  random = Math.floor(Math.random() * (width * height));

  if (snake.includes(random)) {
    setRandom();
  } else {
    const divs = board.querySelectorAll("div");
    divs.forEach((element) => element.classList.remove("apple"));
    divs[random].classList.add("apple");
  }
}

function gameOver() {
  isGameOver = true;
  const audio = document.createElement("audio");
  audio.src = "Country_Blues.ogg";
  audio.volume = 0.1;
  audio.play();

  setTimeout(() => {
    alert("Game Over😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭");
    location.reload();
  }, 100);
}
