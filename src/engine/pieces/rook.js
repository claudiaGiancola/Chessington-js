import Piece from "./piece";
import Square from "../square";
import King from "./king";

export default class Rook extends Piece {
  constructor(player) {
    super(player);
    this.availableMoves = [];
    this.location;
  }

  addMove(x, y) {
    this.availableMoves.push(Square.at(x, y));
  }

  isEmpty(board, x, y) {
    return !board.getPiece(Square.at(x, y));
  }

  isOpponent(board, x, y) {
    return this.player !== board.getPiece(Square.at(x, y)).player;
  }

  isKing(board, x, y) {
    return board.getPiece(Square.at(x, y)) instanceof King;
  }

  getAvailableMoves(board) {
    this.location = board.findPiece(this);
    let x = this.location.row;
    let y = this.location.col;

    // vertical
    // look up
    for (let i = y + 1; i <= 7; i++) {
      if (this.isEmpty(board, x, i)) {
        this.addMove(x, i);
      } else if (
        this.isOpponent(board, x, i) &&
        !this.isKing(board, x, i)
      ) {
        this.addMove(x, i);
        break;
      } else {
        break;
      }
    }
    // look down
    for (let i = y - 1; i >= 0; i--) {
      if (this.isEmpty(board, x, i)) {
        this.addMove(x, i);
      } else if (
        this.isOpponent(
          board,
          x,
          i && !this.isKing(board, x, i)
        )
      ) {
        this.addMove(x, i);
        break;
      } else {
        break;
      }
    }

    // horizontal
    // look left
    for (let i = x - 1; i >= 0; i--) {
      if (this.isEmpty(board, i, y)) {
        this.addMove(i, y);
      } else if (
        this.isOpponent(board, i, y) &&
        !this.isKing(board, i, y)
      ) {
        this.addMove(i, y);
        break;
      } else {
        break;
      }
    }
    // look right
    for (let i = x + 1; i <= 7; i++) {
      if (this.isEmpty(board, i, y)) {
        this.addMove(i, y);
      } else if (
        this.isOpponent(board, i, y) &&
        !this.isKing(board, i, y)
      ) {
        this.addMove(i, y);
        break;
      } else {
        break;
      }
    }

    return this.availableMoves;
  }
}
