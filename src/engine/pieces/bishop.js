import Piece from "./piece";
import Square from "../square";
import King from "./king";

export default class Bishop extends Piece {
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

    // up and left (x+1, y-1)
    for (
      let x = this.location.row + 1, y = this.location.col - 1;
      x <= 7 && y >= 0;
      x += 1, y -= 1
    ) {
      if (this.isEmpty(board, x, y)) {
        this.addMove(x, y);
      } else if (this.isOpponent(board, x, y)
        && !this.isKing(board, x, y)) {
        this.addMove(x, y);
        break;
      } else {
        break;
      }
    }
    // up and right (x + 1, y + 1)
    for (
      let x = this.location.row + 1, y = this.location.col + 1;
      x <= 7 && y <= 7;
      x += 1, y += 1
    ) {
      if (this.isEmpty(board, x, y)) {
        this.addMove(x, y);
      } else if (this.isOpponent(board, x, y)
        && !this.isKing(board, x, y)) {
        this.addMove(x, y);
        break;
      } else {
        break;
      }
    }

    // down and left (x - 1, y -1)
    for (
      let x = this.location.row - 1, y = this.location.col - 1;
      x >= 0 && y >= 0;
      x -= 1, y -= 1
    ) {
      if (this.isEmpty(board, x, y)) {
        this.addMove(x, y);
      } else if (this.isOpponent(board, x, y)
        && !this.isKing(board, x, y)) {
        this.addMove(x, y);
        break;
      } else {
        break;
      }
    }

    // down and right (x - 1, y + 1)
    for (
      let x = this.location.row - 1, y = this.location.col + 1;
      x >= 0 && y <= 7;
      x -= 1, y += 1
    ) {
      if (this.isEmpty(board, x, y)) {
        this.addMove(x, y);
      } else if (this.isOpponent(board, x, y)
        && !this.isKing(board, x, y)) {
        this.addMove(x, y);
        break;
      } else {
        break;
      }
    }

    return this.availableMoves;
  }
}
