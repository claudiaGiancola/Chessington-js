import Piece from './piece';
import Square from '../square';
import King from './king';

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
        return (
            this.player !==
            board.getPiece(Square.at(x, y)).player
        );
    }

    isKing(board, x, y) {
        return (
            board.getPiece(
                Square.at(x, y)
            ) instanceof King
        );
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
                // if it's an opponent, you can take it, but then break
            } else if (this.isOpponent(board, currentXcoord, i) && !this.isKing(board, currentXcoord, i)) {
                this.addMove(currentXcoord, i);
                break;
                // if it's the same colour or a king, just break, you can't move through it
            } else {
                break;
            }
        }
        // look down
        for (let i = currentYcoord - 1; i >= 0; i--) {
            if (this.isEmpty(board, currentXcoord, i)) {
                this.addMove(currentXcoord, i);
            } else if (this.isOpponent(board, currentXcoord, i && !this.isKing(board, currentXcoord, i))) {
                this.addMove(currentXcoord, i);
                break;
            } else {
                break;
            }
        }
   
        // horizontal
        // look left
        for (let i = currentXcoord - 1; i >= 0; i--) {
            if (this.isEmpty(board, i, currentYcoord)) {
                this.addMove(i, currentYcoord);
            } else if (this.isOpponent(board, i, currentYcoord) && !this.isKing(board, i, currentYcoord)) {
                this.addMove(i, currentYcoord);
                break;
            } else {
                break;
            }
        }
        // look right
        for (let i = currentXcoord + 1; i <= 7; i++) {
            if (this.isEmpty(board, i, currentYcoord)) {
                this.addMove(i, currentYcoord);
            } else if (this.isOpponent(board, i, currentYcoord) && !this.isKing(board, i, currentYcoord)) {
                this.addMove(i, currentYcoord);
                break;
            } else {
                break;
            }
        }

        return this.availableMoves;
    }
}
