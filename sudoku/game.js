class Game {
    constructor(difficulty = "easy") {
        this.difficulty = difficulty;
        this.board = new Board(this.difficulty);
    }

    startNewGame() {
        const btns = document.getElementById('btns');
        this.board.newGame();
        this.renderBoard();
        let hintButton = document.getElementById('get-hint');

        if (this.difficulty === "easy") {
            if (!hintButton) {
                hintButton = document.createElement('button');
                hintButton.id = 'get-hint';
                hintButton.className = 'btn';
                hintButton.textContent = 'Get Hint';
                btns.appendChild(hintButton);
                hintButton.addEventListener('click', () => {
                    this.giveHint();
                });
            }
        }
        if (hintButton && this.difficulty !== "easy") {
            btns.removeChild(hintButton);
        }
    }

    giveHint() {
        const emptyCells = [];
        for (let row = 0; row < this.board.gameArray.length; row++) {
            for (let col = 0; col < this.board.gameArray[row].length; col++) {
                if (this.board.gameArray[row][col] === 0) {
                    emptyCells.push({ row, col });
                }
            }
        }
        if (emptyCells.length === 0) {
            return;
        }
        const randomIndex = Math.floor(Math.random() * emptyCells.length);
        const { row, col } = emptyCells[randomIndex];
        const correctValue = this.board.solutionArray[row][col];
        this.board.gameArray[row][col] = correctValue;
        const sudokuTable = document.getElementById("sudoku-table");
        if (sudokuTable) {
            const cell = sudokuTable.rows[row + 1].cells[col].querySelector('.sudoku-cell');
            if (correctValue !== 0) {
                cell.value = correctValue;
                cell.disabled = true;
            }
        }
    }

    changeDifficulty(difficulty) {
        this.difficulty = difficulty;
        this.board.changeDiff(difficulty);
        this.startNewGame();
    }

    renderBoard() {
        const gameBoard = document.getElementById('game-board');
        const infoSpot = document.getElementById('info');
        gameBoard.innerHTML = this.board.getHTML();
        const sudokuTable = document.getElementById("sudoku-table");
        if (sudokuTable) {
            for (let row = 0; row < this.board.gameArray.length; row++) {
                for (let col = 0; col < this.board.gameArray[row].length; col++) {
                    const cell = sudokuTable.rows[row + 1].cells[col].querySelector('.sudoku-cell');
                    const value = this.board.gameArray[row][col];
                    if (value !== 0) {
                        cell.value = value;
                        cell.disabled = true;
                    }
                }
            }
            sudokuTable.addEventListener("change", (event) => {
                infoSpot.innerHTML = "<br>";
                if (event.target.classList.contains("cell-conflict")) {
                    event.target.classList.remove("cell-conflict");
                }
                if (event.target.classList.contains("sudoku-cell")) {
                    const value = event.target.value;
                    if (value > 9 || value < 1) {
                        infoSpot.innerHTML = "Invalid Input. Try a different number";
                        event.target.value = null;
                    } else {
                        let row = event.target.parentElement.parentElement.rowIndex;
                        let col = (event.target.parentElement.cellIndex + 1);
                        this.board.gameArray[row - 1][col - 1] = value;
                        this.checkConflict((row - 1), (col - 1), value, event);
                        this.checkBoard(row, col, sudokuTable);
                    }
                }
            });
        }
        // console.log(this.board.solutionArray);
    }

    checkConflict(row, col, value, event) {
        const startRow = Math.floor((row) / 3) * 3;
        const startCol = Math.floor((col) / 3) * 3;
        if (this.board.rowConflict(row, value) || this.board.colConflict(col, value) || this.board.squareConflict(startRow, startCol, value)) {
            event.target.classList.add("cell-conflict");
        }
    }

    checkBoard(row, col, sudokuTable) {
        if (this.board.rowComplete(this.board.gameArray, (row - 1))) {
            for (let i = 0; i < 9; i++) {
                const cell = sudokuTable.rows[row].cells[i].querySelector('.sudoku-cell');
                if (cell) {
                    cell.disabled = true;
                }
            }
        }
        if (this.board.colComplete(this.board.gameArray, (col - 1))) {
            for (let i = 0; i < 9; i++) {
                const cell = sudokuTable.rows[i + 1].cells[col - 1].querySelector('.sudoku-cell');
                if (cell) {
                    cell.disabled = true;
                }
            }
        }
        const startRow = Math.floor((row - 1) / 3) * 3;
        const startCol = Math.floor((col - 1) / 3) * 3;
        if (this.board.squareComplete(this.board.gameArray, startRow, startCol)) {
            for (let r = startRow; r < startRow + 3; r++) {
                for (let c = startCol; c < startCol + 3; c++) {
                    const cell = sudokuTable.rows[r + 1].cells[c].querySelector('.sudoku-cell');
                    if (cell) {
                        cell.disabled = true;
                    }
                }
            }
        }
        if (this.board.gameWon(this.board.gameArray)) {
            infoSpot.innerHTML = "You WIN! Click below to play again!";
        }
    }
    
    getDifficulty() {
        return this.difficulty;
    }
}

class Board {
    constructor(difficulty) {
        this.difficulty = difficulty;
        this.gameArray = [];
        this.solutionArray = [];
    }

    changeDiff(difficulty) {
        this.difficulty = difficulty;
        this.newGame();
    }

    gameWon(board) {
        for (let row = 0; row < board.length; row++) {
            if (!this.rowComplete(board, row)) {
                return false;
            }
        }
        for (let col = 0; col < board[0].length; col++) {
            if (!this.colComplete(board, col)) {
                return false;
            }
        }
        for (let row = 0; row < board.length; row += 3) {
            for (let col = 0; col < board[0].length; col += 3) {
                if (!this.squareComplete(board, row, col)) {
                    return false;
                }
            }
        }
        return true;
    }

    rowComplete(board, row) {
        for (let col = 0; col < board[row].length; col++) {
            const cell = board[row][col];
            if (cell === 0) {
                return false;
            }
        }
        for (let col = 0; col < board[row].length; col++) {
            const cell = +board[row][col];
            if (cell !== this.solutionArray[row][col]) {
                return false;
            }
        }
        return true;
    }

    colComplete(board, col) {
        for (let row = 0; row < board.length; row++) {
            const cell = board[row][col];
            if (cell === 0) {
                return false;
            }
        }
        for (let row = 0; row < board.length; row++) {
            const cell = +board[row][col];
            if (cell !== this.solutionArray[row][col]) {
                return false;
            }
        }
        return true;
    }

    squareComplete(board, startRow, startCol) {
        for (let row = startRow; row < startRow + 3; row++) {
            for (let col = startCol; col < startCol + 3; col++) {
                const cell = board[row][col];
                if (cell === 0) {
                    return false;
                }
            }
        }
        for (let row = startRow; row < startRow + 3; row++) {
            for (let col = startCol; col < startCol + 3; col++) {
                const cell = +board[row][col];
                if (cell !== this.solutionArray[row][col]) {
                    return false;
                }
            }
        }
        return true;
    }

    rowConflict(row, value) {
        for (let col = 0; col < this.gameArray[row].length; col++) {
            if (this.gameArray[row][col] === +value) {
                return true;
            }
        }
        return false;
    }

    colConflict(col, value) {
        for (let row = 0; row < this.gameArray.length; row++) {
            if (this.gameArray[row][col] === +value) {
                return true;
            }
        }
        return false;
    }

    squareConflict(startRow, startCol, value) {
        for (let row = startRow; row < startRow + 3; row++) {
            for (let col = startCol; col < startCol + 3; col++) {
                if (this.gameArray[row][col] === +value) {
                    return true;
                }
            }
        }
        return false;
    }

    newGame() {
        this.solutionArray = this.generateCompleteBoard();
        this.gameArray = this.createPuzzle(this.solutionArray, this.difficulty);
    }

    generateCompleteBoard() {
        let board = this.initializeBoard();
        this.fillBoard(board);
        return board;
    }

    initializeBoard() {
        let board = [];
        for (let i = 0; i < 9; i++) {
            let row = [];
            for (let j = 0; j < 9; j++) {
                row.push(0);
            }
            board.push(row);
        }
        return board;
    }

    fillBoard(board) {
        for (let row = 0; row < 9; row++) {
            for (let col = 0; col < 9; col++) {
                if (board[row][col] === 0) {
                    let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9].sort(() => Math.random() - 0.5); // random array of nums 1-9
                    for (let num of numbers) {
                        if (this.isValid(board, row, col, num)) {
                            board[row][col] = num;
                            if (this.fillBoard(board)) {
                                return true;
                            }
                            board[row][col] = 0;
                        }
                    }
                    return false;
                }
            }
        }
        return true;
    }

    isValid(board, row, col, num) {
        for (let i = 0; i < 9; i++) {
            if (board[row][i] === num || board[i][col] === num || board[Math.floor(row / 3) * 3 + Math.floor(i / 3)][Math.floor(col / 3) * 3 + i % 3] === num) {
                return false;
            }
        }
        return true;
    }

    createPuzzle(solution, difficulty) {
        let puzzle = this.initializeBoard();
        const hints = {
            easy: 35,
            medium: 25,
            hard: 20
        };
        let cellsToGive = hints[difficulty];
        while (cellsToGive > 0) {
            let row = Math.floor(Math.random() * 9);
            let col = Math.floor(Math.random() * 9);
            if (puzzle[row][col] == 0) {
                puzzle[row][col] = solution[row][col];
                cellsToGive--;
            }
        }
        return puzzle;
    }

    getHTML() {
        return `
            <table id="sudoku-table">
                <tbody>
                    <tr></tr>
                        <td><input type="number" min="1" max="9" class="sudoku-cell" /></td>
                        <td><input type="number" min="1" max="9" class="sudoku-cell" /></td>
                        <td><input type="number" min="1" max="9" class="sudoku-cell" /></td>
                        <td><input type="number" min="1" max="9" class="sudoku-cell" /></td>
                        <td><input type="number" min="1" max="9" class="sudoku-cell" /></td>
                        <td><input type="number" min="1" max="9" class="sudoku-cell" /></td>
                        <td><input type="number" min="1" max="9" class="sudoku-cell" /></td>
                        <td><input type="number" min="1" max="9" class="sudoku-cell" /></td>
                        <td><input type="number" min="1" max="9" class="sudoku-cell" /></td>
                    </tr>
                    <tr>
                        <td><input type="number" min="1" max="9" class="sudoku-cell" /></td>
                        <td><input type="number" min="1" max="9" class="sudoku-cell" /></td>
                        <td><input type="number" min="1" max="9" class="sudoku-cell" /></td>
                        <td><input type="number" min="1" max="9" class="sudoku-cell" /></td>
                        <td><input type="number" min="1" max="9" class="sudoku-cell" /></td>
                        <td><input type="number" min="1" max="9" class="sudoku-cell" /></td>
                        <td><input type="number" min="1" max="9" class="sudoku-cell" /></td>
                        <td><input type="number" min="1" max="9" class="sudoku-cell" /></td>
                        <td><input type="number" min="1" max="9" class="sudoku-cell" /></td>
                    </tr>
                    <tr>
                        <td><input type="number" min="1" max="9" class="sudoku-cell" /></td>
                        <td><input type="number" min="1" max="9" class="sudoku-cell" /></td>
                        <td><input type="number" min="1" max="9" class="sudoku-cell" /></td>
                        <td><input type="number" min="1" max="9" class="sudoku-cell" /></td>
                        <td><input type="number" min="1" max="9" class="sudoku-cell" /></td>
                        <td><input type="number" min="1" max="9" class="sudoku-cell" /></td>
                        <td><input type="number" min="1" max="9" class="sudoku-cell" /></td>
                        <td><input type="number" min="1" max="9" class="sudoku-cell" /></td>
                        <td><input type="number" min="1" max="9" class="sudoku-cell" /></td>
                    </tr>
                    <tr>
                        <td><input type="number" min="1" max="9" class="sudoku-cell" /></td>
                        <td><input type="number" min="1" max="9" class="sudoku-cell" /></td>
                        <td><input type="number" min="1" max="9" class="sudoku-cell" /></td>
                        <td><input type="number" min="1" max="9" class="sudoku-cell" /></td>
                        <td><input type="number" min="1" max="9" class="sudoku-cell" /></td>
                        <td><input type="number" min="1" max="9" class="sudoku-cell" /></td>
                        <td><input type="number" min="1" max="9" class="sudoku-cell" /></td>
                        <td><input type="number" min="1" max="9" class="sudoku-cell" /></td>
                        <td><input type="number" min="1" max="9" class="sudoku-cell" /></td>
                    </tr>
                    <tr>
                        <td><input type="number" min="1" max="9" class="sudoku-cell" /></td>
                        <td><input type="number" min="1" max="9" class="sudoku-cell" /></td>
                        <td><input type="number" min="1" max="9" class="sudoku-cell" /></td>
                        <td><input type="number" min="1" max="9" class="sudoku-cell" /></td>
                        <td><input type="number" min="1" max="9" class="sudoku-cell" /></td>
                        <td><input type="number" min="1" max="9" class="sudoku-cell" /></td>
                        <td><input type="number" min="1" max="9" class="sudoku-cell" /></td>
                        <td><input type="number" min="1" max="9" class="sudoku-cell" /></td>
                        <td><input type="number" min="1" max="9" class="sudoku-cell" /></td>
                    </tr>
                    <tr>
                        <td><input type="number" min="1" max="9" class="sudoku-cell" /></td>
                        <td><input type="number" min="1" max="9" class="sudoku-cell" /></td>
                        <td><input type="number" min="1" max="9" class="sudoku-cell" /></td>
                        <td><input type="number" min="1" max="9" class="sudoku-cell" /></td>
                        <td><input type="number" min="1" max="9" class="sudoku-cell" /></td>
                        <td><input type="number" min="1" max="9" class="sudoku-cell" /></td>
                        <td><input type="number" min="1" max="9" class="sudoku-cell" /></td>
                        <td><input type="number" min="1" max="9" class="sudoku-cell" /></td>
                        <td><input type="number" min="1" max="9" class="sudoku-cell" /></td>
                    </tr>
                    <tr>
                        <td><input type="number" min="1" max="9" class="sudoku-cell" /></td>
                        <td><input type="number" min="1" max="9" class="sudoku-cell" /></td>
                        <td><input type="number" min="1" max="9" class="sudoku-cell" /></td>
                        <td><input type="number" min="1" max="9" class="sudoku-cell" /></td>
                        <td><input type="number" min="1" max="9" class="sudoku-cell" /></td>
                        <td><input type="number" min="1" max="9" class="sudoku-cell" /></td>
                        <td><input type="number" min="1" max="9" class="sudoku-cell" /></td>
                        <td><input type="number" min="1" max="9" class="sudoku-cell" /></td>
                        <td><input type="number" min="1" max="9" class="sudoku-cell" /></td>
                    </tr>
                    <tr>
                        <td><input type="number" min="1" max="9" class="sudoku-cell" /></td>
                        <td><input type="number" min="1" max="9" class="sudoku-cell" /></td>
                        <td><input type="number" min="1" max="9" class="sudoku-cell" /></td>
                        <td><input type="number" min="1" max="9" class="sudoku-cell" /></td>
                        <td><input type="number" min="1" max="9" class="sudoku-cell" /></td>
                        <td><input type="number" min="1" max="9" class="sudoku-cell" /></td>
                        <td><input type="number" min="1" max="9" class="sudoku-cell" /></td>
                        <td><input type="number" min="1" max="9" class="sudoku-cell" /></td>
                        <td><input type="number" min="1" max="9" class="sudoku-cell" /></td>
                    </tr>
                    <tr>
                        <td><input type="number" min="1" max="9" class="sudoku-cell" /></td>
                        <td><input type="number" min="1" max="9" class="sudoku-cell" /></td>
                        <td><input type="number" min="1" max="9" class="sudoku-cell" /></td>
                        <td><input type="number" min="1" max="9" class="sudoku-cell" /></td>
                        <td><input type="number" min="1" max="9" class="sudoku-cell" /></td>
                        <td><input type="number" min="1" max="9" class="sudoku-cell" /></td>
                        <td><input type="number" min="1" max="9" class="sudoku-cell" /></td>
                        <td><input type="number" min="1" max="9" class="sudoku-cell" /></td>
                        <td><input type="number" min="1" max="9" class="sudoku-cell" /></td>
                    </tr>
                </tbody>
            </table>
        `;
    }
}
