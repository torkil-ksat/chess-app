import React from "react";

function Player({ player: player }) {
  return (
    <div className={"player-card " + player}>
      <div className="player-info">
        <p className="player-name">Player Name</p>
      </div>
    </div>
  );
}

export default Player;
