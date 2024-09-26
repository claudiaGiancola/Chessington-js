# chessington-js
Starter project for a chess-based TDD exercise

Install with `npm install`
Run tests with `npm test`
Start program with `npm start`. This will host a server on `localhost:3000`


Guide to the code
=================

## Board

When a board is created it initialises a 2-dimensional array of length 8.
That is, an array of 8 arrays, where each array inside has a length of 8.

These represent rows and columns.

So, to select the first row you can do 
`let row1 = board[0]`
And to get the second square of that row:
`let square = row1[1]`
Or, in shorthand:
`let square = board[0][1]`

`Board` then has the following methods to use:
`setPiece(square, piece)` places the given piece on a square returns nothing.
`getPiece(square)` returns the piece on a given square, if one is there.
`findPiece(pieceToFind)` will return the square that the piece is on, if it is on the board.
`movePiece(fromSquare, toSquare)` will move the piece on the fromSquare to the toSquare.

## Square

Squares have two properties: `row` and `col`.

Squares can be made one of two ways (I'm not really sure why...)
`let square1 = Square.at(0,1)`
OR
`let square2 = new Square(0,1)`
These are equal. You can check like this:
`square1.equals(square2)`. This will return a boolean (in this case, true.)

## Pieces

pieces have one method: `getAvailableMoves(board)`.
This method must be given the current board (so that it can know which moves are available!)
it returns an array, which is a list of `Square`s that are available to be moved to.

Commits for testing specific pieces:
- Red-2 and Red-3
- Red-8 (pawns)
- Red-18 (pawns)
- Red-9 (rooks)
- Red-13 (rooks)
- Red-4 (bishops)
- Red-10 (bishops)
- Red-14 (bishops)
- Red-12 (keeping pieces on the board)

# Development

Goals:
- Unit testing
- Test Driven Development (TDD)

- Using `git cherry-pick <commit name>` to apply the updates from only specific commits to the code
- I learnt to interpret and code automated unit tests using the Chai assertion library paired with the Mocha JavaScript test framework.
- It was great to experience how a TDD pipeline can streamline the coding process. In fact, while coding the chess piece’s move sets in “Chessington” (in JavaScript) and while refactoring the complex and obscure store inventory code of “Gilded Rose” (in TypeScript), having the tests in sight allowed me to have as a clearer goal in mind and save my energy to focus only on how to achieve it.
- I made sure my tests were clearly described for my peers to understand, along with being easily scalable and adaptable to different needs

Possible future updates:
- Write code and tests for remaining pieces
- Implement secondary chess rules (En Passant, Castling, Pawn Promotion, Check, Check Mate)
- Implement a scoreboard to calculate each player's score. Each taken piece is worth a certain amount of points (pawn = 1, bishops and knights = 3, rooks = 5, queens = 9)
- Develop a chess AI playing as the user's opponent

