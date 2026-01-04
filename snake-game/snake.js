const width = 21;
const height = 20;
const oddNums = [];
const boardNums = [];
const snake = [3,2,1,0];
let head = snake[0];
let direction = "right";
let interval;

const board = document.querySelector(".board");

board.style.gridTemplateColumns = `repeat(${width}, 1fr)`;

let leftBoundaries = [];
let rightBoundaries = [];

for (let i = 0; i < height; i++) {
  rightBoundaries.push(i * width + (width -1));
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
    

  // snakeColor();
}
}

for (let i = 0; i < width * height; i++) {
  boardNums.push(i);
}

boardNums.forEach(num => {
  if (num % 2 !== 0) {
    oddNums.push(num);
  }
});

console.log(oddNums)

function snakeColor() {
  const divs = board.querySelectorAll("div");
  divs.forEach((div) => div.classList.remove("snake", "head"));
  snake.forEach((num) => divs[num].classList.add("snake"));
  divs[head].classList.add("head");
}


window.addEventListener("keydown", (event) => {
  switch (event.key) {
    case "w":
    case "ArrowUp":
      move("up");
      break;
    case "d":
    case "ArrowRight":
      move("right");
      break;
    case "a":
    case "ArrowLeft":
      move("left");
      break;
    case "s":
    case "ArrowDown":
      move("down");
      break;
  }

  // startAuto();
});

function move(dir) {
  const divs = board.querySelectorAll("div");
  if (dir === "up") {
    if (direction === "down") {
      return;
    }

    if (!divs[head]) {
      return;
    }
    head -= width;
  } else if (dir === "right") {
    if (direction === "left") {
      return;
    }
    if (leftBoundaries.includes(head)) {
      return;
    }
    head++;
  } else if (dir === "left") {
    if (direction === "right") {
      return;
    }
    if (rightBoundaries.includes(head)) {
      return; // gameover
    }
    head--;
  } else if (dir === "down") {
    if (direction === "up") {
      return;
    }
    if (!divs[head]) {
      return;
    }
    head += width;
  }

  snake.unshift(head);
  snake.pop();
  snakeColor();
}

function startAuto() {
  clearInterval(interval);
  setInterval(() => move(direction), 200);
}

function gameOver() {
    alert("game over")
    location.reload();
}