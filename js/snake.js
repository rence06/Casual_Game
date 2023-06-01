const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const gridSize = 20;
const gridWidth = canvas.width / gridSize;
const gridHeight = canvas.height / gridSize;

let snake = [
  { x: 10, y: 10 },
];
let direction = "right";
let isGameOver = false;

function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function drawSnake() {
  snake.forEach(segment => {
    ctx.fillStyle = "#333333";
    ctx.fillRect(segment.x * gridSize, segment.y * gridSize, gridSize, gridSize);
  });
}

function moveSnake() {
  const head = { x: snake[0].x, y: snake[0].y };
  switch (direction) {
    case "up":
      head.y--;
      break;
    case "down":
      head.y++;
      break;
    case "left":
      head.x--;
      break;
    case "right":
      head.x++;
      break;
  }

  snake.unshift(head);
  snake.pop();
}

function changeDirection(event) {
  if (isGameOver) return;

  const validKeys = {
    upButton: "up",
    leftButton: "left",
    rightButton: "right",
    downButton: "down"
  };

  const clickedButtonId = event.target.id;
  if (validKeys[clickedButtonId]) {
    direction = validKeys[clickedButtonId];
  }
}

function resetGame() {
  snake = [
    { x: 10, y: 10 },
  ];
  direction = "right";
  isGameOver = false;
}

function checkGameOver() {
  const head = snake[0];

  // Check if snake hits the wall
  if (
    head.x < 0 ||
    head.x >= gridWidth ||
    head.y < 0 ||
    head.y >= gridHeight
  ) {
    isGameOver = true;
  }

  // Check if snake hits itself
  for (let i = 1; i < snake.length; i++) {
    if (head.x === snake[i].x && head.y === snake[i].y) {
      isGameOver = true;
      break;
    }
  }
}

function gameLoop() {
  if (isGameOver) {
    return;
  }

  clearCanvas();
  moveSnake();
  drawSnake();
  checkGameOver();
}

document.getElementById("upButton").addEventListener("click", changeDirection);
document.getElementById("leftButton").addEventListener("click", changeDirection);
document.getElementById("rightButton").addEventListener("click", changeDirection);
document.getElementById("downButton").addEventListener("click", changeDirection);

document.getElementById("resetButton").addEventListener("click", resetGame);

setInterval(gameLoop, 100);
