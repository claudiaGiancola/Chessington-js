import Player from '../player';
import Square from '../square';
import Piece from './piece';

export default class Pawn extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let location = board.findPiece(this)

        const spaceOneInFrontWhite = Square.at(location.row + 1, location.col);
        const spaceTwoInFrontWhite = Square.at(location.row + 2, location.col);
        const spaceOneInFrontBlack = Square.at(location.row - 1, location.col);
        const spaceTwoInFrontBlack = Square.at(location.row - 2, location.col);

        let availableMoves = [];

        if (this.player === Player.WHITE) {
            if (this.pieceHasMoved && !board.getPiece(spaceOneInFrontWhite)) {
                availableMoves.push(Square.at(location.row + 1, location.col));
            } else if (!this.pieceHasMoved && !board.getPiece(spaceOneInFrontWhite) && !board.getPiece(spaceTwoInFrontWhite)) {
                availableMoves.push(
                    Square.at(location.row + 1, location.col),
                    Square.at(location.row + 2, location.col)
                );
            }
        } else {
            if (this.pieceHasMoved && !board.getPiece(spaceOneInFrontBlack)) {
                availableMoves.push(Square.at(location.row - 1, location.col));
            } else if (!this.pieceHasMoved && !board.getPiece(spaceOneInFrontBlack) && !board.getPiece(spaceTwoInFrontBlack)) {
                availableMoves.push(
                    Square.at(location.row - 1, location.col),
                    Square.at(location.row - 2, location.col)
                );
            } 
        }

        return availableMoves;
    }
}
