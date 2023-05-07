import React from "react";

function Player({ player: player, setShowPopup: setShowPopup }) {
  return (
    <div className={"player-card " + player}>
      <div className="player-info">
        <p className="player-name">
          {player === "player1" ? "🔥 Player 1" : "😍 Player 2"}
        </p>
      </div>
      <div className="sidebar">
        <button
          onClick={() => {
            setShowPopup(true);
          }}
        >
          📖
        </button>
      </div>
    </div>
  );
}

export default Player;
