import React from "react";
import { ReactComponent as Pawn } from '../assets/pawn.svg';
import Piece from "./Piece";

function Board({board: board, setBoard:setBoard}) {
    const squares = [];

    for (let y = 0; y < 8; y++) {
        for (let c = 0; c < 8; c++) {
            const squareColor = (c + y) % 2 === 0 ? 'white' : 'black';
            console.log(board[y][c]);
            const piece = Math.abs(board[y][c]);
            const player = board[y][c] > 0 ? "player1" : "player2";
            squares.push(
            <div
                className={`tile ${squareColor}`}
                key={`${c},${y}`}
                data-coord={`${c},${y}`}
            ><Piece piece={piece} player={player} /></div>
            );
        }
    }

    // const handleSquareClick = (event) => {
    //     const square = event.target;
    //     const coord = square.getAttribute('data-coord');
    //     console.log(`Selected square: ${coord}`);
    // };

  return (
    <div id="board">
      <div className="board-container">
        {squares}
      </div>
    </div>
  );
}

export default Board;
