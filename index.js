const gameBoard = (() => {
  let board = ['', '', '', '', '', '', '', '', ''];

  const resetBoard = () => {
    board = ['', '', '', '', '', '', '', '', ''];
  };

  const setCell = (index, marker) => {
    if (board[index] === '') {
      board[index] = marker;
      return true;
    }
    return false;
  };

  const getBoard = () => board;

  return { resetBoard, setCell, getBoard };
})();

const createPlayer = (name, marker) => {
  return { name, marker }
}

const gameController = (() => {
  let players = [];
  let currentPlayerIndex = 0;
  let gameOver = false;

  const startGame = (player1Name, player2Name) => {
    players = [createPlayer(player1Name, 'X'), createPlayer(player2Name, 'O')];
    currentPlayerIndex = 0;
    gameBoard.resetBoard();
    gameOver = false;
    document.querySelector(".turn").textContent = `${players[currentPlayerIndex].name} turn`;
  };

  const playRound = (cellIndex) => {
    if (gameOver) return;

    if (gameBoard.setCell(cellIndex, players[currentPlayerIndex].marker)) {
      if (checkWin()) {

        gameOver = true;
        document.querySelector(".turn").textContent = '';
        return (`${players[currentPlayerIndex].name} wins!`);

      } else if (checkTie()) {
        gameOver = true;
        document.querySelector(".turn").textContent = '';
        return ("It's a tie!");

      }

      currentPlayerIndex = currentPlayerIndex === 0 ? 1 : 0;
      document.querySelector(".turn").textContent = `${players[currentPlayerIndex].name} turn`;
    }

    return "Continue";
  };

  const checkWin = () => {
    const winningCombos = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6]
    ];

    return winningCombos.some(combo => {
      const [a, b, c] = combo;

      return (
        gameBoard.getBoard()[a] &&
        gameBoard.getBoard()[a] === gameBoard.getBoard()[b] &&
        gameBoard.getBoard()[a] === gameBoard.getBoard()[c]
      );
    });
  }
  const checkTie = () => {
    return gameBoard.getBoard().every(cell => cell !== '');
  };

  return { startGame, playRound };
})();

const DisplayController = (() => {
  const gameBoardElement = document.getElementById('game-board');
  const resultElement = document.getElementById('result');

  const renderBoard = () => {
    gameBoardElement.innerHTML = '';
    gameBoard.getBoard().forEach((cell, index) => {
      const cellElement = document.createElement('div');
      cellElement.classList.add('cell');
      cellElement.textContent = cell;
      cellElement.addEventListener('click', () => {
        const result = gameController.playRound(index);
        renderBoard();
        updateResult(result);
      });
      gameBoardElement.appendChild(cellElement);
    });
  };

  const updateResult = (result) => {

    if (result !== "Continue") {
      resultElement.textContent = result;
    };
  };

  return { renderBoard };
})();

document.getElementById('start-game').addEventListener('click', () => {
  const player1Name = document.getElementById('player1-name').value || "Player 1";
  const player2Name = document.getElementById('player2-name').value || "Player 2";
  gameController.startGame(player1Name, player2Name);
  DisplayController.renderBoard();
  document.getElementById('result').textContent = '';
});