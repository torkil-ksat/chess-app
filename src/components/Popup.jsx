import React from "react";

function Popup({ type: type, setShowPopup: setShowPopup }) {
  function newGame() {
    window.location.reload(false);
  }

  return (
    <div id="popup">
      <div className="popup-container">
        <div className="popup-title">
          <h2>Menu</h2>
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
        </div>
      </div>
    </div>
  );
}

export default Popup;
