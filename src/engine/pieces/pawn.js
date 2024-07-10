import Player from '../player';
import Square from '../square';
import Piece from './piece';
import King from './king';
import GameSettings from '../gameSettings'

export default class Pawn extends Piece {
  constructor(player) {
    super(player);
    this.availableMoves = [];
    this.location;
  }

  isOnBoard(x, y) {
    const boardSize = GameSettings.BOARD_SIZE;

    return (x < boardSize && x >= 0 && y < boardSize && y >= 0);
  }

  addMove(x, y) {
      this.availableMoves.push(
        Square.at(this.location.row + x, this.location.col + y)
      );
  }

  isEmpty(board, x, y) {
    return !board.getPiece(
      Square.at(this.location.row + x, this.location.col + y)
    );
  }

  isOpponent(board, x, y) {
    return (
      this.player !==
      board.getPiece(Square.at(this.location.row + x, this.location.col + y))
        .player
    );
  }

  isKing(board, x, y) {
    return (
      board.getPiece(
        Square.at(this.location.row + x, this.location.col + y)
      ) instanceof King
    );
  }

  getAvailableMoves(board) {
    this.location = board.findPiece(this);

    if (this.player === Player.WHITE) {
    
      if (this.isOnBoard(this.location.row + 2, this.location.col)) {
        //two square in front
        if (
          !this.pieceHasMoved &&
          this.isEmpty(board, 1, 0) &&
          this.isEmpty(board, 2, 0)
        ) {
          this.addMove(2, 0);
        }

        // square in front
        if (this.isEmpty(board, 1, 0)) {
          this.addMove(1, 0);
        }
      }

      // left diagonal
      if (this.isOnBoard(this.location.row + 1, this.location.col - 1)) {
        if (
          !this.isEmpty(board, 1, -1) &&
          this.isOpponent(board, 1, -1) &&
          !this.isKing(board, 1, -1)
        ) {
          this.addMove(1, -1);
        }
      }
      
      // right diagonal
      if (this.isOnBoard(this.location.row + 1, this.location.col + 1)) {
        if (
          !this.isEmpty(board, 1, 1) &&
          this.isOpponent(board, 1, 1) &&
          !this.isKing(board, 1, 1)
        ) {
          this.addMove(1, 1);
        }
      }
      
      //Player.BLACK
    } else {
      
      if (this.isOnBoard(this.location.row - 2, this.location.col)) {
        // two in front
        if (
          !this.pieceHasMoved &&
          this.isEmpty(board, -1, 0) &&
          this.isEmpty(board, -2, 0)
        ) {
          this.addMove(-2, 0);
        }
  
        // one in front
        if (this.isEmpty(board, -1, 0)) {
          this.addMove(-1, 0);
        }
      }

      // left diagonal
      if (this.isOnBoard(this.location.row - 1, this.location.col - 1)) {
        if (
          !this.isEmpty(board, -1, -1) &&
          this.isOpponent(board, -1, -1) &&
          !this.isKing(board, -1, -1)
        ) {
          this.addMove(-1, -1);
        }
      }

      // right diagonal
      if (this.isOnBoard(this.location.row - 1, this.location.col + 1)) {
        if (
          !this.isEmpty(board, -1, 1) &&
          this.isOpponent(board, -1, 1) &&
          !this.isKing(board, -1, 1)
        ) {
          this.addMove(-1, 1);
        }
      }
    }

    return this.availableMoves;
  }
}