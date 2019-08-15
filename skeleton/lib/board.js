let Piece = require("./piece");

/**
 * Returns a 2D array (8 by 8) with two black pieces at [3, 4] and [4, 3]
 * and two white pieces at [3, 3] and [4, 4]
 */
function _makeGrid () {
  let board = new Array(8);

  board = board.fill(0).map(x=> new Array(8));
  board[3][4] = new Piece("black");
  board[4][3] = new Piece("black");

  board[3][3] = new Piece("white");
  board[4][4] = new Piece("white");
  return board;
}

/**
 * Constructs a Board with a starting grid set up.
 */
function Board () {
  this.grid = _makeGrid();
}


// class constant
Board.DIRS = [
  [ 0,  1], [ 1,  1], [ 1,  0],
  [ 1, -1], [ 0, -1], [-1, -1],
  [-1,  0], [-1,  1]
];

/**
 * Returns the piece at a given [x, y] position,
 * throwing an Error if the position is invalid.
 */
Board.prototype.getPiece = function (pos) {
  let x = pos[0];
  let y = pos[1];

  if ((x < 8 && x >= 0) && (y < 8 && y >= 0)) {
    return this.grid[x][y];
  }
  else {
    throw error;
  }
};

/**
 * Checks if there are any valid moves for the given color.
 */
Board.prototype.hasMove = function (color) {
  
};



/**
 * Checks if the piece at a given position
 * matches a given color.
 */
Board.prototype.isMine = function (pos, color) {
  let x = pos[0];
  let y = pos[1];

  if (this.grid[x][y].color === color) {
    return true;
  }
  else {
    return false;
  }
};

/**
 * Checks if a given position has a piece on it.
 */
Board.prototype.isOccupied = function (pos) {
  let x = pos[0];
  let y = pos[1];

  if (this.grid[x][y]) {
    return true;
  }
  else {
    return false;
  }
};

/**
 * Checks if both the white player and
 * the black player are out of moves.
 */
Board.prototype.isOver = function () {
  let gameOver = false;
  if (!this.hasMove("black") && !this.hasMove("white")) {
    gameOver = true;
  }
  return gameOver;
};

/**
 * Checks if a given position is on the Board.
 */
Board.prototype.isValidPos = function (pos) {
  let x = pos[0];
  let y = pos[1];

  if ((x < 8 && x >= 0) && (y < 8 && y >= 0)) {
    return true;
  }
  else {
    return false;
  }
};

/**
 * Recursively follows a direction away from a starting position, adding each
 * piece of the opposite color until hitting another piece of the current color.
 * It then returns an array of all pieces between the starting position and
 * ending position.
 *
 * Returns null if it reaches the end of the board before finding another piece
 * of the same color.
 *
 * Returns null if it hits an empty position.
 *
 * Returns null if no pieces of the opposite color are found.
 */
function _positionsToFlip (board, pos, color, dir, piecesToFlip) {
  let nextPos = [pos[0] + dir[0], pos[1] + dir[1]] ;
  while ( !(nextPos[0] < 0) && !(nextPos[0] > 7) ) && ( !(nextPos[1] < 0) && !(nextPos[1] > 7) ) {
    let x = nextPos[0] ;
    let y = nextPos[1] ;

    if ( (this.grid[x][y]) && (this.grid[x][y].color !== color) ) {
      piecesToFlip.push(this.grid[x][y]) ;
      nextPos = [nextPos[0] + pos[0], nextPos[1] + pos[1]] ;
    }
    else {
      break ;
    }
  }
}

/**
 * Adds a new piece of the given color to the given position, flipping the
 * color of any pieces that are eligible for flipping.
 *
 * Throws an error if the position represents an invalid move.
 */
Board.prototype.placePiece = function (pos, color) {
};

/**
 * Prints a string representation of the Board to the console.
 */
Board.prototype.print = function () {
  console.log("    A  B  C  D  E  F  G  H  ");
  console.log("   ________________________ ");
  console.log("                            ");
  
  for (let x = 0; x < this.grid.length; x++) {
    let tempArr = [];
    for (let y = 0; y < this.grid.length; y++) {
      if (!this.grid[x][y]) {
        tempArr.push("[_]");
      }
      else {
        tempArr.push(this.grid[x][y].toString());
      }
    }
    console.log(`${x+1}| ` + tempArr.join("") + ` |${x+1}`);
  }
  console.log("   ________________________ ");
  console.log("                            ");
  console.log("    A  B  C  D  E  F  G  H  ");
};

/**
 * Checks that a position is not already occupied and that the color
 * taking the position will result in some pieces of the opposite
 * color being flipped.
 */
Board.prototype.validMove = function (pos, color) {

};

/**
 * Produces an array of all valid positions on
 * the Board for a given color.
 */
Board.prototype.validMoves = function (color) {
  // for (let x = 0; x < this.grid.length; x++) {
  //   for (let y = 0; y < this.grid.length; y++) {
  //     if (this.grid[x][y]) && (this.grid[x][y].color === color) {
  //       for (let i = 0; i < Board.DIRS.length; i ++) {
  //         let position = this.grid[x + (Board.DIRS[i][0])][y + (Board.DIRS[i][1])];
  //         if ((position) && (position.color != color)) {
  //           position[0 + (Board.DIRS[i][0])];
  //         }
  //       }
  //     }
  //   }
  // }
};

module.exports = Board;
