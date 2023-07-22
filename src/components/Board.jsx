import React, { useState } from 'react';
import Piece from './Piece';

import { checkMove } from '../utils/moves';

function Board({
    board,
    setBoard,
    setWarnings,
    warnings,
    deadPieces,
    setDeadPieces,
}) {
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
        resetWarnings();
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
                console.warn('Selected same piece!');
                warn(activePiecePlayer, 'Selected same piece!');
            } else if (activePiecePlayer === targetPiecePlayer) {
                console.warn('Target piece is on your side!');
                warn(activePiecePlayer, 'Target piece is on your side!');
            } else if (
                !checkMove(selected, [coordC, coordY], selectedPiece, board)
            ) {
                console.warn('Move is not allowed!');
                warn(activePiecePlayer, 'Move is not allowed!');
            } else {
                // replace target spot with original piece
                tempBoard[coordY][coordC] = selectedPiece;
                tempBoard[selected[1]][selected[0]] = 0;

                if (targetPiece !== 0)
                    killPiece(
                        targetPiecePlayer,
                        Math.abs(parseInt(targetPiece))
                    );

                // console.log(`Moving to: [${coordC}, ${coordY}]`);
            }
            document.querySelector('.selected').classList.remove('selected');
            setSelecting(false);
        }
    };

    const warn = (player, warning) => {
        if (player === 'player1') {
            setWarnings([warning, warnings[1]]);
        }
        if (player === 'player2') {
            setWarnings([warnings[0], warning]);
        }
    };

    const resetWarnings = () => {
        setWarnings(['', '']);
    };

    const killPiece = (player, piece) => {
        if (player === 'player1') {
            let newDeadPieces = deadPieces[0];
            newDeadPieces.push(piece);
            setDeadPieces([newDeadPieces, deadPieces[1]]);
        }
        if (player === 'player2') {
            let newDeadPieces = deadPieces[1];
            newDeadPieces.push(piece);
            setDeadPieces([deadPieces[0], newDeadPieces]);
        }
    };

    return (
        <div id="board">
            <div className="board-container">{squares}</div>
        </div>
    );
}

export default Board;
