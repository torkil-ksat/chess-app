export function function1() {
    console.log('testing testing testin testing');
}

export function checkTurn() {}

export function checkMove(selectedString, targetString, piece, board) {
    const selected = [parseInt(selectedString[0]), parseInt(selectedString[1])];
    const target = [parseInt(targetString[0]), parseInt(targetString[1])];
    console.log('selected', selected);
    console.log('target', target);
    console.log('piece', piece);
    const player = piece > 0 ? 1 : -1;
    const abs_piece = Math.abs(piece);

    let allowed = true;
    let moves = [];

    switch (abs_piece) {
        case 1: // pawn
            // check if there is a piece in front
            // if (0 <= selected[1] + player && selected[1] + player <= 7) {
            if (checkBounds(selected, [0, player])) {
                if (board[selected[1] + player][selected[0]] === 0) {
                    moves.push([selected[0], selected[1] + player]);
                    // if this is the piece's first move
                    if (
                        selected[1] === 1 &&
                        player === 1 &&
                        board[selected[1] + player * 2][selected[0]] === 0
                    ) {
                        moves.push([selected[0], selected[1] + player * 2]);
                    }
                    if (
                        selected[1] === 6 &&
                        player === -1 &&
                        board[selected[1] + player * 2][selected[0]] === 0
                    ) {
                        moves.push([selected[0], selected[1] + player * 2]);
                    }
                }
            }
            // if there is a diagonal piece to eat
            if (checkBounds(selected, [0, player])) {
                if (board[selected[1] + player][selected[0] + 1] !== 0) {
                    moves.push([selected[0] + 1, selected[1] + player]);
                }
                if (board[selected[1] + player][selected[0] - 1] !== 0) {
                    moves.push([selected[0] - 1, selected[1] + player]);
                }
            }
            if (!isIncluded(target, moves)) allowed = false;
            break;

        case 2: // rook
            let directions_rook = [
                [0, 1],
                [0, -1],
                [1, 0],
                [-1, 0],
            ];
            for (let i = 0; i < 4; i++) {
                console.log('i', i);
                let keeprunning = true;
                let steps = 1;
                let direction = directions_rook[i];
                while (keeprunning) {
                    if (
                        checkBounds(selected, [
                            direction[0] * steps,
                            direction[1] * steps,
                        ])
                    ) {
                        moves.push([
                            selected[0] + direction[0] * steps,
                            selected[1] + direction[1] * steps,
                        ]);
                        if (
                            board[selected[1] + direction[1] * steps][
                                selected[0] + direction[0] * steps
                            ]
                        ) {
                            keeprunning = false;
                        }
                    } else {
                        keeprunning = false;
                    }
                    steps += 1;
                }
            }

            console.log('moves', moves);
            if (!isIncluded(target, moves)) allowed = false;
            break;

        case 3: // bishop
            let directions_bishop = [
                [1, 1],
                [1, -1],
                [-1, 1],
                [-1, -1],
            ];
            for (let i = 0; i < 4; i++) {
                console.log('i', i);
                let keeprunning = true;
                let steps = 1;
                let direction = directions_bishop[i];
                while (keeprunning) {
                    if (
                        checkBounds(selected, [
                            direction[0] * steps,
                            direction[1] * steps,
                        ])
                    ) {
                        moves.push([
                            selected[0] + direction[0] * steps,
                            selected[1] + direction[1] * steps,
                        ]);
                        if (
                            board[selected[1] + direction[1] * steps][
                                selected[0] + direction[0] * steps
                            ]
                        ) {
                            keeprunning = false;
                        }
                    } else {
                        keeprunning = false;
                    }
                    steps += 1;
                }
            }

            console.log('moves', moves);
            if (!isIncluded(target, moves)) allowed = false;
            break;

        case 4: // knight
            moves.push([selected[0] + 2, selected[1] - 1]);
            moves.push([selected[0] + 2, selected[1] + 1]);

            moves.push([selected[0] - 2, selected[1] - 1]);
            moves.push([selected[0] - 2, selected[1] + 1]);

            moves.push([selected[0] - 1, selected[1] + 2]);
            moves.push([selected[0] + 1, selected[1] + 2]);

            moves.push([selected[0] - 1, selected[1] - 2]);
            moves.push([selected[0] + 1, selected[1] - 2]);

            console.log('moves', moves);
            if (!isIncluded(target, moves)) allowed = false;
            break;

        case 5: // queen
            let directions_queen = [
                [-1, 1],
                [0, 1],
                [1, 1],
                [1, 0],
                [1, -1],
                [0, -1],
                [-1, -1],
                [-1, 0],
            ];
            for (let i = 0; i < 8; i++) {
                console.log('i', i);
                let keeprunning = true;
                let steps = 1;
                let direction = directions_queen[i];
                while (keeprunning) {
                    if (
                        checkBounds(selected, [
                            direction[0] * steps,
                            direction[1] * steps,
                        ])
                    ) {
                        moves.push([
                            selected[0] + direction[0] * steps,
                            selected[1] + direction[1] * steps,
                        ]);
                        if (
                            board[selected[1] + direction[1] * steps][
                                selected[0] + direction[0] * steps
                            ]
                        ) {
                            keeprunning = false;
                        }
                    } else {
                        keeprunning = false;
                    }
                    steps += 1;
                }
            }

            console.log('moves', moves);
            if (!isIncluded(target, moves)) allowed = false;
            break;

        case 6: // king
            for (let x = -1; x <= 1; x++) {
                for (let y = -1; y <= 1; y++) {
                    console.log('selected[0] + x', x + 2);
                    moves.push([selected[0] + x, selected[1] + y]);
                }
            }

            console.log('moves', moves);
            if (!isIncluded(target, moves)) allowed = false;
            break;
    }

    if (!allowed) console.warn('Move is not allowed!');

    return allowed;
}

function isIncluded(target, list) {
    const included = list.some(
        (array) =>
            array.length === target.length &&
            array.every((element, index) => element === target[index])
    );
    return included;
}

// checks if in bounds, takes in 2 arrays of [x, y] positions
function checkBounds(selected, change) {
    const changed = [selected[0] + change[0], selected[1] + change[1]];
    if (changed[0] < 0 || changed[0] > 7) return false;
    if (changed[1] < 0 || changed[1] > 7) return false;
    return true;
}
