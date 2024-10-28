const gameboard = document.getElementById('gameboard');
const scoreDisplay = document.getElementById('score');
const highScoreDisplay = document.getElementById('highScore');
const difficultyButtons = document.querySelectorAll('.difficulty-selector input[type="radio"]');
const diffSelect = document.getElementById('difficulty-selector');
const difficulties = {
    easy: {
        boardSize: 10, 
        speed: 250,
        highscore: localStorage.getItem("high-score-easy") || 0,
        size: 38
    },
    medium: {
        boardSize: 15,
        speed: 200,
        highscore: localStorage.getItem("high-score-medium") || 0,
        size: 25
    },
    hard: {
        boardSize: 20,
        speed: 200,
        highscore: localStorage.getItem("high-score-hard") || 0,
        size: 19
    },
    expert: {
        boardSize: 25,
        speed: 150,
        highscore: localStorage.getItem("high-score-expert") || 0,
        size: 15
    }
};
let snake = [{ x: 10, y: 10 }];
let direction = { x: 0, y: 0 };
let nextDirection = { x: 0, y: -1 };
let food = {};
let score = 0;
let currentDifficulty = 'easy';
let interval;
let speed = 0;
let gamePlaying = false;
let inputPaused = false;
let isMobile = window.innerWidth <= 768;
highScoreDisplay.textContent = displayHighScore();

function resetGame() {
    updateGameboardSize();
    direction = { x: 0, y: 0 };
    nextDirection = { x: 0, y: -1 };
    score = 0;
    snake = [{ x: Math.floor(boardSize / 2), y: Math.floor(boardSize / 2) }];
    generateFood();
    drawGame();
}

function startGame() {
    gamePlaying = true;
    direction = { x: 0, y: -1 };
    nextDirection = { x: 0, y: -1 };
    speed = difficulties[currentDifficulty].speed;
    interval = setInterval(gameLoop, speed);
    disableDiffSelect();
}

function gameLoop() {
    direction = nextDirection;
    updateSnakePosition();
    gameWon();
    if (checkCollision()) {
        gameOver();
    } else {
        if (ateFood()) {
            growSnake();
            generateFood();
            updateScore();
            if (score % 10 === 0 && currentDifficulty !== 'expert') {
                increaseSpeed();
            }
        }
        drawGame();
    }
}

function updateSnakePosition() {
    const head = { 
        x: snake[0].x + direction.x, 
        y: snake[0].y + direction.y 
    };
    snake.unshift(head);
    snake.pop();
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

function increaseSpeed() {
    if (speed > 50) {
        clearInterval(interval);
        speed -= 10;
        interval = setInterval(gameLoop, speed);
    }
}

function gameOver() {
    gamePlaying = false;
    clearInterval(interval);
    enableDiffSelect();
    inputPaused = true;
    displayLoose();
    scoreDisplay.textContent = 0;
}

function gameWon() {
    if (snake.length === (boardSize * boardSize)) {
        gamePlaying = false;
        clearInterval(interval);
        enableDiffSelect();
        inputPaused = true;
        displayWin();
    }
}

function displayLoose() {
    gameboard.innerHTML = `
        <div class="message">
            <h2>You Lose. Your snake was ${snake.length} feet long!</h2>
            <button id='playagain'>Play Again</button>
        </div>`;
}

function displayWin() {
    gameboard.innerHTML = `
        <div class="message">
            <h2>You Win!</h2>
            <button id='playagain'>Play Again</button>
        </div>`;
}

function readyNext() {
    inputPaused = false;
    gameboard.innerHTML = '';
}

function drawGame() {
    gameboard.innerHTML = '';
    snake.forEach(segment => {
        const snakeElement = document.createElement('div');
        snakeElement.style.gridRowStart = segment.y + 1;
        snakeElement.style.gridColumnStart = segment.x + 1;
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

// Keyboard controls. Arrows and wasd work.
function changeDirection(event) {
    switch (event.key) {
        case 'ArrowUp':
        case 'w':
            if (direction.y !== 1) {
                nextDirection = { x: 0, y: -1 };
            }
            break;
        case 'ArrowDown':
        case 's':
            if (direction.y !== -1) {
                nextDirection = { x: 0, y: 1 };
            }
            break;
        case 'ArrowLeft':
        case 'a':
            if (direction.x !== 1) {
                nextDirection = { x: -1, y: 0 };
            }
            break;
        case 'ArrowRight':
        case 'd':
            if (direction.x !== -1) {
                nextDirection = { x: 1, y: 0 };
            }
            break;
    }
}

window.addEventListener('keydown', e => {
    if (inputPaused) return;
    if (gamePlaying) {
        changeDirection(e);
    } else {
        handleStart();
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
        if (Math.abs(diffX) > Math.abs(diffY)) {
            if (diffX > 0 && direction.x !== -1) {
                nextDirection = { x: 1, y: 0 };
            } else if (diffX < 0 && direction.x !== 1) {
                nextDirection = { x: -1, y: 0 };
            }
        } else {
            if (diffY > 0 && direction.y !== -1) {
                nextDirection = { x: 0, y: 1 };
            } else if (diffY < 0 && direction.y !== 1) {
                nextDirection = { x: 0, y: -1 };
            }
        }
    }
}
