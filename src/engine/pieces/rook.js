import Piece from './piece';
import Square from '../square';

export default class Rook extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let currentLocation = board.findPiece(this)
        let currentXcoord = currentLocation.row
        let currentYcoord = currentLocation.col

        const rookMoves = [];
        for (let i = 0; i <= 7 ; i++) {
            if (i !== currentXcoord) {
                rookMoves.push(Square.at(i, currentYcoord));
            }
        }

        for (let i = 0; i <= 7 ; i++) {
            if (i !== currentYcoord) {
                rookMoves.push(Square.at(currentXcoord, i));
            }
        }

        return rookMoves;
    }
}
