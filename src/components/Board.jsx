import React, { useState } from 'react';
import { ReactComponent as Pawn } from '../assets/pawn.svg';
import Piece from './Piece';

import { function1, checkMove } from '../utils/moves';

function Board({ board: board, setBoard: setBoard }) {
    const squares = [];
    const [selected, setSelected] = useState([]);
    const [possibleMoves, setPossibleMoves] = useState([]);
    const [selecting, setSelecting] = useState(false);

    for (let y = 0; y < 8; y++) {
        for (let c = 0; c < 8; c++) {
            const squareColor = (c + y) % 2 === 0 ? 'white' : 'black';
            const piece = Math.abs(board[y][c]);
            const player = board[y][c] > 0 ? 'player1' : 'player2';
            squares.push(
                <div
                    className={`tile ${squareColor}`}
                    key={`${c},${y}`}
                    data-coordc={c}
                    data-coordy={y}
                    onClick={(e) => {
                        handleTileClick(e);
                    }}
                >
                    <Piece piece={piece} player={player} />
                </div>
            );
        }
    }

    const handleTileClick = (event) => {
        const tile = event.target;
        if (!selecting) {
            // Selecting piece to move
            const coordC = tile.getAttribute('data-coordc');
            const coordY = tile.getAttribute('data-coordy');
            const selectedPiece = board[coordY][coordC];
            if (selectedPiece !== 0) {
                setSelecting(true);
                tile.classList.add('selected');
                setSelected([coordC, coordY]);
                const selectedPiece = board[coordY][coordC];

                // console.log(
                //     `Selected tile: [${coordC}, ${coordY}], ${selectedPiece}`
                // );
            }
        } else {
            // Choosing move finish spot
            let tempBoard = board;
            const coordC = tile.getAttribute('data-coordc');
            const coordY = tile.getAttribute('data-coordy');
            const selectedPiece = board[selected[1]][selected[0]];
            const targetPiece = board[coordY][coordC];
            const activePiecePlayer =
                selectedPiece > 0
                    ? 'player1'
                    : selectedPiece < 0
                    ? 'player2'
                    : 'none';
            const targetPiecePlayer =
                targetPiece > 0
                    ? 'player1'
                    : targetPiece < 0
                    ? 'player2'
                    : 'none';

            if (selected[0] === coordC && selected[1] === coordY) {
                console.warn('Selected same piece.');
            } else if (activePiecePlayer === targetPiecePlayer) {
                console.warn('Target piece is from the same side.');
            } else if (
                !checkMove(selected, [coordC, coordY], selectedPiece, board)
            ) {
                return;
            } else {
                // replace target spot with original piece
                tempBoard[coordY][coordC] = selectedPiece;
                tempBoard[selected[1]][selected[0]] = 0;

                // console.log(`Moving to: [${coordC}, ${coordY}]`);
            }
            document.querySelector('.selected').classList.remove('selected');
            setSelecting(false);
        }
    };

    return (
        <div id="board">
            <div className="board-container">{squares}</div>
        </div>
    );
}

export default Board;
