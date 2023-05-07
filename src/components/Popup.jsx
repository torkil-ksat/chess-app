import React from "react";

function Popup({
  type: type,
  setShowPopup: setShowPopup,
  startingConfig: startingConfig,
  setBoard: setBoard,
}) {
  function newGame() {
    setBoard(startingConfig);
    setShowPopup(false);
  }
  function refreshPage() {
    window.location.reload(true);
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
        </div>
      </div>
    </div>
  );
}

export default Popup;
