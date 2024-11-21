# Tic Tac Toe Game

This project is a browser-based Tic Tac Toe game implemented in JavaScript, HTML, and CSS. It is designed to be simple, interactive, and modular. The project is inspired by the [Odin Project](https://www.theodinproject.com/) curriculum and follows principles of modular code structure and clean user interface.

---

## Table of Contents

1. [Features](#features)
2. [Technologies Used](#technologies-used)
3. [How to Use](#how-to-use)
4. [Code Structure](#code-structure)
5. [How It Works](#how-it-works)
6. [Customization](#customization)
7. [Acknowledgments](#acknowledgments)

---

## Features

- **Two-player gameplay**:

  - Enter custom player names for a personalized experience.
  - Take turns to place your marker (`X` or `O`) on the grid.

- **Win and Tie Detection**:

  - The game automatically detects when a player wins or if the game ends in a tie.

- **Dynamic Turn Indicator**:

  - Displays whose turn it is during gameplay.

- **Replay Option**:
  - Reset the board and start a new game anytime by entering names and clicking the **Start Game** button.

---

## Technologies Used

- **HTML**: Defines the structure of the application, including the game grid and input fields.
- **CSS**: Used to style the game board and interface (you need to add styles to `style.css` for better visuals).
- **JavaScript**: Implements game logic, DOM manipulation, and interactivity.

---

## How to Use

1. Clone or download this repository to your local machine.
2. Open the `index.html` file in your browser.
3. Follow these steps to play:
   - Enter player names in the input fields (optional).
   - Click the **Start Game** button to begin.
   - Players take turns clicking on the grid cells to place their markers.
   - The game announces a winner or a tie in the results section when the game ends.

---

## Code Structure

The codebase is divided into three primary modules to ensure separation of concerns:

### 1. **`gameBoard`**

- Responsible for maintaining the state of the board (the grid).
- Functions:
  - `resetBoard()`: Clears the board to start a new game.
  - `setCell(index, marker)`: Places a marker (`X` or `O`) at a specific cell if it's empty.
  - `getBoard()`: Retrieves the current state of the board.

### 2. **`gameController`**

- Handles the game logic, including:
  - Alternating turns between players.
  - Checking for a win or tie condition.
  - Communicating results (e.g., "Player 1 wins!") to the `DisplayController`.

### 3. **`DisplayController`**

- Manages the visual rendering of the game board and results.
- Functions:
  - `renderBoard()`: Renders the board dynamically based on the current state.
  - `updateResult(result)`: Updates the result message in the DOM.

### 4. **HTML & DOM**

- The HTML defines the layout of the game, while JavaScript manipulates it dynamically.
- Key Elements:
  - `#game-board`: Holds the Tic Tac Toe grid.
  - `#result`: Displays the game's outcome.
  - `.turn`: Shows the current player's turn.

---

## How It Works

1. **Initialization**:

   - When the "Start Game" button is clicked:
     - Players' names are set (defaulting to "Player 1" and "Player 2" if left blank).
     - The board is reset, and the first player's turn is displayed.

2. **Gameplay**:

   - Players click on a cell to place their marker (`X` or `O`).
   - The `playRound` function:
     - Updates the game board.
     - Checks for a win or tie condition.
     - Alternates the turn if the game continues.

3. **Game Over**:
   - If a player wins, their name is displayed with a "wins!" message.
   - If all cells are filled without a winner, a "It's a tie!" message is shown.

---

## Customization

- **Styling**:

  - Modify the `style.css` file to add styles for the game grid, buttons, and other elements.

- **Grid Size**:

  - This implementation uses a 3x3 grid, but you can extend the logic to larger grids (e.g., 4x4 or 5x5) by modifying the `gameBoard` and `checkWin` logic.

- **Player Features**:
  - Add AI or a difficulty mode to enhance the game.

---

## Acknowledgments

- This project is inspired by the **[Odin Project](https://www.theodinproject.com/)**, a free curriculum for learning web development.
- Special thanks to the Odin Project community for providing guidance and examples for modular JavaScript and clean coding practices.
