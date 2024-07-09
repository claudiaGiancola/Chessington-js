import Player from '../player';
import Square from '../square';
import Piece from './piece';
import King from './king';

export default class Pawn extends Piece {
  constructor(player) {
    super(player);
    this.availableMoves = [];
    this.location;
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
      // square two in front
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

      // left diagonal
      if (
        !this.isEmpty(board, 1, -1) &&
        this.isOpponent(board, 1, -1) &&
        !this.isKing(board, 1, -1)
      ) {
        this.addMove(1, -1);
      }
      // right diagonal
      if (
        !this.isEmpty(board, 1, 1) &&
        this.isOpponent(board, 1, 1) &&
        !this.isKing(board, 1, 1)
      ) {
        this.addMove(1, 1);
      }
    } else {
      if (
        !this.pieceHasMoved &&
        this.isEmpty(board, -1, 0) &&
        this.isEmpty(board, -2, 0)
      ) {
        this.addMove(-2, 0);
      }

      if (this.isEmpty(board, -1, 0)) {
        this.addMove(-1, 0);
      }

      if (
        !this.isEmpty(board, -1, -1) &&
        this.isOpponent(board, -1, -1) &&
        !this.isKing(board, -1, -1)
      ) {
        this.addMove(-1, -1);
      }

      if (
        !this.isEmpty(board, -1, 1) &&
        this.isOpponent(board, -1, 1) &&
        !this.isKing(board, -1, 1)
      ) {
        this.addMove(-1, 1);
      }
    }

    return this.availableMoves;
  }
}