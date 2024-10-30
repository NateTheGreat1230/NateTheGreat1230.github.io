const gameboard = document.getElementById('gameboard');
const scoreDisplay = document.getElementById('score');
const highScoreDisplay = document.getElementById('highScore');
const difficultyButtons = document.querySelectorAll('.difficulty-selector input[type="radio"]');
const diffSelect = document.getElementById('difficulty-selector');
const difficulties = {
    easy: {
        boardSize: 10, 
        speed: 200,
        highscore: localStorage.getItem("high-score-easy") || 0,
        size: 38
    },
    medium: {
        boardSize: 15,
        speed: 150,
        highscore: localStorage.getItem("high-score-medium") || 0,
        size: 25
    },
    hard: {
        boardSize: 20,
        speed: 125,
        highscore: localStorage.getItem("high-score-hard") || 0,
        size: 19
    },
    expert: {
        boardSize: 25,
        speed: 100,
        highscore: localStorage.getItem("high-score-expert") || 0,
        size: 15
    }
};
let snake = [];
let direction = { x: 0, y: 0 };
let directionQueue = [];
let food = {};
let score = 0;
let currentDifficulty = 'easy';
let speed = 0;
let lastUpdate = 0;
let gamePlaying = false;
let inputPaused = false;
let isMobile = window.innerWidth <= 500;
highScoreDisplay.textContent = displayHighScore();

function resetGame() {
    updateGameboardSize();
    score = 0;
    snake = [{ x: Math.floor(boardSize / 2), y: Math.floor(boardSize / 2), prevX: Math.floor(boardSize / 2), prevY: Math.floor(boardSize / 2) }];
    generateFood();
}

function startGame() {
    gamePlaying = true;
    direction = { x: 0, y: -1 };
    directionQueue = [{ x: 0, y: -1 }];
    speed = difficulties[currentDifficulty].speed;
    requestAnimationFrame(renderLoop);
    disableDiffSelect();
}

function gameLoop() {
    if (checkGameWon()) {
        gameWon();
    } else {
        if (directionQueue.length > 0) {
            direction = directionQueue.shift();
        }
        updateSnakePosition();
        if (checkCollision()) {
            gameOver();
        } else {
            if (ateFood()) {
                growSnake();
                generateFood();
                updateScore();
            }
        }
    }
}

function updateSnakePosition() {
    for (let i = snake.length - 1; i > 0; i--) {
        snake[i].prevX = snake[i].x;
        snake[i].prevY = snake[i].y;
        snake[i].x = snake[i - 1].x;
        snake[i].y = snake[i - 1].y;
    }
    snake[0].prevX = snake[0].x;
    snake[0].prevY = snake[0].y;
    snake[0].x += direction.x;
    snake[0].y += direction.y;
}

function updateGameboardSize() {
    boardSize = difficulties[currentDifficulty].boardSize;
    let cellSize = difficulties[currentDifficulty].size;
    if (isMobile) {
        cellSize = cellSize * (3/4);
    }
    const size = boardSize * cellSize + boardSize;
    gameboard.style.width = `${size}px`;
    gameboard.style.height = `${size}px`;
    gameboard.style.gridTemplateRows = `repeat(${boardSize}, ${cellSize}px)`;
    gameboard.style.gridTemplateColumns = `repeat(${boardSize}, ${cellSize}px)`;
    document.documentElement.style.setProperty('--board-size', boardSize);
}

function checkCollision() {
    const head = snake[0];
    return head.x < 0 || head.x >= boardSize || head.y < 0 || head.y >= boardSize ||
        snake.slice(1).some(segment => segment.x === head.x && segment.y === head.y);
}

function ateFood() {
    return snake[0].x === food.x && snake[0].y === food.y;
}

function growSnake() {
    snake.push({ ...snake[snake.length - 1] });
}

function generateFood() {
    if (snake.length < (boardSize * boardSize) - 1) {
        while(true) {
            food = {
                x: Math.floor(Math.random() * boardSize),
                y: Math.floor(Math.random() * boardSize)
            };
            if (!snake.some(segment => segment.x === food.x && segment.y === food.y)) {
                break;
            }
        }
    }
}

function updateScore() {
    score++;
    scoreDisplay.textContent = score;
    if (score > difficulties[currentDifficulty].highscore) {
        updateHighScore(score);
        highScoreDisplay.innerHTML = displayHighScore();
    }
}

function updateHighScore(newScore) {
    if (newScore > difficulties[currentDifficulty].highscore) {
        difficulties[currentDifficulty].highscore = newScore;
        localStorage.setItem(`high-score-${currentDifficulty}`, newScore);
    }
}

function displayHighScore() {
    return `High Score (${currentDifficulty}): ${difficulties[currentDifficulty].highscore}`;
}

function checkGameWon() {
    return (snake.length >= (boardSize * boardSize) - 1);
}

function gameOver() {
    gamePlaying = false;
    enableDiffSelect();
    inputPaused = true;
    displayLoose();
    scoreDisplay.textContent = 0;
}

function gameWon() {
    gamePlaying = false;
    enableDiffSelect();
    inputPaused = true;
    displayWin();
}

function displayLoose() {
    gameboard.innerHTML = `
        <div class="message">
            <h2>You Lose. Your snake was ${score} feet long!</h2>
            <button id='playagain'>Play Again</button>
        </div>`;
    if (!isMobile) {
        const nextBtn = document.getElementById('playagain');
        nextBtn.addEventListener('click', readyNext);
    }
}

function displayWin() {
    gameboard.innerHTML = `
        <div class="message">
            <h2>You Win!</h2>
            <button id='playagain'>Play Again</button>
        </div>`;
    if (!isMobile) {
        const nextBtn = document.getElementById('playagain');
        nextBtn.addEventListener('click', readyNext);
    }
}

function readyNext() {
    inputPaused = false;
    gameboard.innerHTML = '';
}

function renderLoop(timestamp) {
    if (gamePlaying) {
        const fraction = (timestamp - lastUpdate) / speed;
        requestAnimationFrame(renderLoop);
        drawGame(fraction);
        if (fraction >= 1) {
            gameLoop();
            lastUpdate = timestamp;
        }
    }
}

function drawGame(fraction) {
    gameboard.innerHTML = '';
    snake.forEach(segment => {
        const snakeElement = document.createElement('div');
        const interpX = segment.prevX + fraction * (segment.x - segment.prevX);
        const interpY = segment.prevY + fraction * (segment.y - segment.prevY);
        snakeElement.style.gridRowStart = Math.floor(interpY) + 1;
        snakeElement.style.gridColumnStart = Math.floor(interpX) + 1;
        snakeElement.style.transform = `translate(${(interpX % 1) * 100}%, ${(interpY % 1) * 100}%)`;
        snakeElement.classList.add('snake');
        gameboard.appendChild(snakeElement);
    });
    const foodElement = document.createElement('div');
    foodElement.style.gridRowStart = food.y + 1;
    foodElement.style.gridColumnStart = food.x + 1;
    foodElement.classList.add('food');
    gameboard.appendChild(foodElement);
}

function requestFullscreen() {
    if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
    } else if (document.documentElement.mozRequestFullScreen) {
        document.documentElement.mozRequestFullScreen();
    } else if (document.documentElement.webkitRequestFullscreen) {
        document.documentElement.webkitRequestFullscreen();
    } else if (document.documentElement.msRequestFullscreen) {
        document.documentElement.msRequestFullscreen();
    }
}

function handleStart() {
    if (isMobile) {
        requestFullscreen();
    }
    resetGame();
    startGame();
}

difficultyButtons.forEach(button => {
    button.addEventListener('change', () => {
        currentDifficulty = button.value;
        updateGameboardSize();
        highScoreDisplay.innerHTML = displayHighScore();
    });
});

function disableDiffSelect() {
    diffSelect.classList.add('hideBtns');
}

function enableDiffSelect() {
    diffSelect.classList.remove('hideBtns');
}

// Keyboard controls including arrows and wasd.
function changeDirection(event) {
    let newDirection = null;
    switch (event.key) {
        case 'ArrowUp':
        case 'w':
            newDirection = { x: 0, y: -1 };
            break;
        case 'ArrowDown':
        case 's':
            newDirection = { x: 0, y: 1 };
            break;
        case 'ArrowLeft':
        case 'a':
            newDirection = { x: -1, y: 0 };
            break;
        case 'ArrowRight':
        case 'd':
            newDirection = { x: 1, y: 0 };
            break;
    }
    if (newDirection) {
        const lastDirection = directionQueue[directionQueue.length - 1] || direction;
        if (
            newDirection.x !== -lastDirection.x ||
            newDirection.y !== -lastDirection.y
        ) {
            directionQueue.push(newDirection);
        }
    }
}

window.addEventListener('keydown', e => {
    if (inputPaused) return;
    const allowedKeys = [
        'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight',
        'w', 'a', 's', 'd',
        'Enter', ' '
    ];
    if (!allowedKeys.includes(e.key)) return;
    if (gamePlaying) {
        changeDirection(e);
    } else {
        if (allowedKeys.includes(e.key)) {
            handleStart();
        }
    }
});

window.addEventListener('load', updateGameboardSize);

// Mobile controls. Including tap to start and swipe to turn.
let startX = 0;
let startY = 0;
const minSwipe = 20;

gameboard.addEventListener('touchstart', handleTouchStart, false);
gameboard.addEventListener('touchend', handleTouchEnd, false);

function handleTouchStart(event) {
    if (!inputPaused) {
        const firstTouch = event.touches[0];
        startX = firstTouch.clientX;
        startY = firstTouch.clientY;
    } else {
        const nextBtn = document.getElementById('playagain');
        nextBtn.addEventListener('click', readyNext);
    }
}

function handleTouchEnd(event) {
    if (!inputPaused) {
        const endX = event.changedTouches[0].clientX;
        const endY = event.changedTouches[0].clientY;
        const diffX = endX - startX;
        const diffY = endY - startY;
        const distance = Math.sqrt(diffX * diffX + diffY * diffY);
        if (distance < minSwipe) {
            if (!gamePlaying) {
                handleStart();
                return;
            }
        }
        let newDirection = null;
        if (Math.abs(diffX) > Math.abs(diffY)) {
            if (diffX > 0 && direction.x !== -1) {
                newDirection = { x: 1, y: 0 };
            } else if (diffX < 0 && direction.x !== 1) {
                newDirection = { x: -1, y: 0 };
            }
        } else {
            if (diffY > 0 && direction.y !== -1) {
                newDirection = { x: 0, y: 1 };
            } else if (diffY < 0 && direction.y !== 1) {
                newDirection = { x: 0, y: -1 };
            }
        }
        if (newDirection) {
            directionQueue.push(newDirection);
        }
    }
}
