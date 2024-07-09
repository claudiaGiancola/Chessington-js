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
        // console.log(x, y);
        return !board.getPiece(Square.at(x, y));
    }

    getAvailableMoves(board) {
        this.location = board.findPiece(this);
        let currentXcoord = this.location.row;
        let currentYcoord = this.location.col;
        
        // vertical
        // look up
        // for (let i = currentYcoord + 1; i <= 7; i++) {
        //     while (this.isEmpty(board, currentXcoord, i)) {
        //        console.log(this.isEmpty(board, currentXcoord, i)); 
        //        i++;
        //     }
        // }

        if (!this.isEmpty(4, 6)) {
            console.log("the square is not empty")
        } else {
            console.log("nope")
        }
        
        // look down
        // for (let i = currentXcoord - 1; i >= 0; i--) {
        //     let columnBelowEmpty = true
        //     while (columnBelowEmpty) {
        //         if (this.isEmpty(board, i, currentYcoord)) {
        //             this.addMove(i, currentYcoord);
        //         } else {
        //             columnBelowEmpty = false;
        //         } 
        //     }
        // }

        // for (let i = 0; i <= 7; i++) {
        //   if (i !== currentXcoord) {
        //     this.addMove(i, currentYcoord);
        //   }
        // }

        // horizontal
        // look left
        // for (let i = currentYcoord - 1; i >= 0; i--) {
        //     let RowLeftEmpty = true
        //     while (RowLeftEmpty) {
        //         if (this.isEmpty(board, currentXcoord, i)) {
        //             this.addMove(currentXcoord, i);
        //         } else {
        //             RowLeftEmpty = false;
        //         }
        //     }
        // }

        // look right
        // for (let i = currentYcoord + 1; i <= 7; i++) {
        //     console.log(this.isEmpty(board, i, currentYcoord));
        // }

        // for (let i = 0; i <= 7 ; i++) {
        //     if (i !== currentYcoord) {
        //         this.addMove(currentXcoord, i);
        //     }
        // }

        return this.availableMoves;
    }
}
