import 'chai/register-should';
import Queen from '../../../src/engine/pieces/queen';
import Rook from '../../../src/engine/pieces/rook';
import Pawn from '../../../src/engine/pieces/pawn';
import King from '../../../src/engine/pieces/king';
import Board from '../../../src/engine/board';
import Player from '../../../src/engine/player';
import Square from '../../../src/engine/square';

describe('Queen', () => {

    let board;
    beforeEach(() => board = new Board());

    it.only('can move laterally', () => {

        const queen = new Queen(Player.WHITE);
        board.setPiece(Square.at(2, 3), queen);

        const moves = queen.getAvailableMoves(board);

        const expectedMoves = [
            // Horizontal
            Square.at(2, 0), Square.at(2, 1), Square.at(2, 2), Square.at(2, 4), Square.at(2, 5), Square.at(2, 6), Square.at(2, 7),
            // Vertical
            Square.at(0, 3), Square.at(1, 3), Square.at(3, 3), Square.at(4, 3), Square.at(5, 3), Square.at(6, 3), Square.at(7, 3)
        ];

        moves.should.deep.include.members(expectedMoves);
    });

});
