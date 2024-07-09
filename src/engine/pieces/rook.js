import Piece from './piece';
import Square from '../square';

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

    getAvailableMoves(board) {
        this.location = board.findPiece(this);
        let currentXcoord = this.location.row;
        let currentYcoord = this.location.col;
        
        // vertical
        // look up
        for (let i = currentYcoord + 1; i <= 7; i++) {
            if (this.isEmpty(board, currentXcoord, i)) {
                this.addMove(currentXcoord, i);
            } else {
                break;
            }
        }
        // look down
        for (let i = currentYcoord - 1; i >= 0; i--) {
            if (this.isEmpty(board, currentXcoord, i)) {
                this.addMove(currentXcoord, i);
            } else {
                break;
            }
        }
   
        // horizontal
        // look left
        for (let i = currentXcoord - 1; i >= 0; i--) {
            if (this.isEmpty(board, i, currentYcoord)) {
                this.addMove(i, currentYcoord);
            } else {
                break;
            }
        }
        // look right
        for (let i = currentXcoord + 1; i <= 7; i++) {
            if (this.isEmpty(board, i, currentYcoord)) {
                this.addMove(i, currentYcoord);
            } else {
                break;
            }
        }

        return this.availableMoves;
        return this.availableMoves;
    }
}
