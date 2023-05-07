import React from "react";

function Popup({
  type: type,
  setShowPopup: setShowPopup,
  startingConfig: startingConfig,
  setBoard: setBoard,
  player: player,
  score: score,
  setScore: setScore,
}) {
  function newGame() {
    setBoard(startingConfig);
    setShowPopup(false);
  }
  function refreshPage() {
    window.location.reload(true);
  }
  function addWin(target) {
    let newScore = score;
    if (target === "player1") {
      newScore[0] += 1;
    } else {
      newScore[1] += 1;
    }
    setScore(score);
  }

  return (
    <div id="popup">
      <div className="popup-container">
        <div className="popup-title">
          <h2>menu</h2>
          <button
            onClick={() => {
              setShowPopup(false);
            }}
          >
            ❌
          </button>
        </div>
        <div className="popup-body">
          <div className="popup-option">
            <p>start new game: </p>
            <button
              onClick={() => {
                newGame();
              }}
            >
              🚀
            </button>
          </div>
          <div className="popup-option">
            <p>undo last move (doesn't work yet): </p>
            <button>↩️</button>
          </div>
          <div className="popup-option">
            <p>refresh page: </p>
            <button
              onClick={() => {
                refreshPage();
              }}
            >
              🧨
            </button>
          </div>
          <div className="popup-option">
            <p>give me a win: </p>
            <button
              onClick={() => {
                addWin(player);
                setShowPopup(false);
              }}
            >
              🏆
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Popup;
