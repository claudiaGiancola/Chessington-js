import Piece from "./piece";
import Square from "../square";
// import King from "./king";

export default class Bishop extends Piece {
  constructor(player) {
    super(player);
    this.availableMoves = [];
    this.location;
  }

  addMove(x, y) {
    this.availableMoves.push(Square.at(x, y));
  }

  getAvailableMoves(board) {
    this.location = board.findPiece(this);
    
    // up and left (x+1, y-1)
    for (
      let currentXcoord = this.location.row + 1, currentYcoord = this.location.col - 1;
      currentXcoord <= 7 && currentYcoord >= 0;
      currentXcoord += 1, currentYcoord -= 1) {
      this.addMove(currentXcoord, currentYcoord);
    }
    // up and right (x + 1, y + 1)
    for (
      let currentXcoord = this.location.row + 1, currentYcoord = this.location.col + 1;
      currentXcoord <= 7 && currentYcoord <= 7;
      currentXcoord += 1, currentYcoord += 1) {
      this.addMove(currentXcoord, currentYcoord);
    }

    // down and left (x - 1, y -1)
    for (
        let currentXcoord = this.location.row - 1, currentYcoord = this.location.col - 1;
        currentXcoord >= 0 && currentYcoord >= 0;
        currentXcoord -= 1, currentYcoord -= 1) {
        this.addMove(currentXcoord, currentYcoord);
      }

    // down and right (x - 1, y + 1)
    for (
        let currentXcoord = this.location.row - 1, currentYcoord = this.location.col + 1;
        currentXcoord >= 0 && currentYcoord <= 7;
        currentXcoord -= 1, currentYcoord += 1) {
        this.addMove(currentXcoord, currentYcoord);
      }

    return this.availableMoves;
  }
}
