import React from 'react';
import Piece from './Piece';

function Player({
    player,
    setShowPopup,
    wins,
    setPlayerPopup,
    warning,
    deadPieces,
}) {
    let winsEmoji;
    switch (wins) {
        case 0:
            winsEmoji = '0️⃣';
            break;
        case 1:
            winsEmoji = '1️⃣';
            break;
        case 2:
            winsEmoji = '2️⃣';
            break;
        case 3:
            winsEmoji = '3️⃣';
            break;
        case 4:
            winsEmoji = '4️⃣';
            break;
        case 5:
            winsEmoji = '5️⃣';
            break;
        case 6:
            winsEmoji = '6️⃣';
            break;
        case 7:
            winsEmoji = '7️⃣';
            break;
        case 8:
            winsEmoji = '8️⃣';
            break;
        case 9:
            winsEmoji = '9️⃣';
            break;
    }

    return (
        <div className={'player-card ' + player}>
            <div className="player-info">
                <p className="player-name">
                    {player === 'player1' ? '🥳 player 1' : '😍 player 2'}
                </p>
                <p className="player-wins">wins: {winsEmoji}</p>
                <div className="player-warnings">
                    <p>{warning}</p>
                </div>
            </div>
            <div className="sidebar">
                <button
                    onClick={() => {
                        setPlayerPopup(player);
                        setShowPopup(true);
                    }}
                >
                    📖
                </button>
                <div className="pieces">
                    {deadPieces.map((piece, i) => {
                        return (
                            <Piece
                                piece={piece}
                                key={i}
                                player={
                                    player === 'player1' ? 'player2' : 'player1'
                                }
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default Player;
