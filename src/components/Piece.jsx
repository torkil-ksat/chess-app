import React from 'react'

import { ReactComponent as Pawn } from '../assets/pawn.svg';

function Piece({player: player, piece: piece}) {
    let icon;
    switch(piece) {
        case 1:
            icon = <Pawn width="100%" height="100%"/>;
            break;
        default:
            break;
    }
    return (
        <div className={"piece " + player}>
            {icon}
        </div>
    )
}

export default Piece