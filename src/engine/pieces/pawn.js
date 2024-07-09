import Player from '../player';
import Square from '../square';
import Piece from './piece';

export default class Pawn extends Piece {
    constructor(player) {
        super(player);
        this.availableMoves = [];
        this.location;
    }

    addMove(x, y) {
        this.availableMoves.push(Square.at(this.location.row + x, this.location.col + y));
    }

    isEmpty(board, x, y) {
        return !board.getPiece(Square.at(this.location.row + x, this.location.col + y));
    }

    getAvailableMoves(board) {
        this.location = board.findPiece(this);

        if (this.player === Player.WHITE) {
            if (!this.pieceHasMoved && this.isEmpty(board, 1, 0) && this.isEmpty(board, 2, 0)) { 
                this.addMove(2, 0);
            }

            if (this.isEmpty(board, 1, 0)) {
                this.addMove(1, 0);
            } 
        } else {
            if (!this.pieceHasMoved && this.isEmpty(board, -1, 0) && this.isEmpty(board,-2, 0)) { 
                this.addMove(-2, 0);
            }

            if (this.isEmpty(board, -1, 0)) {
                this.addMove(-1, 0);
            }
        }
        
        //player.color !== player.color(piece in front) if we want it to be eaten

        return this.availableMoves;
    }
}
