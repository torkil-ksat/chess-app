import { useState, useEffect } from "react";
import Board from "./components/Board";
import Player from "./components/Player";
import Popup from "./components/Popup";

function App() {
  const [board, setBoard] = useState([
    [2, 4, 3, 6, 5, 3, 4, 2],
    [1, 1, 1, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [-1, -1, -1, -1, -1, -1, -1, -1],
    [-2, -4, -3, -5, -6, -3, -4, -2],
  ]);
  const [showPopup, setShowPopup] = useState(false);
  const [isLandscape, setIsLandscape] = useState(false);

  useEffect(() => {
    const handleOrientationChange = (e) => {
      setIsLandscape(e.matches);
    };

    const mediaQuery = window.matchMedia("(orientation: landscape)");
    setIsLandscape(mediaQuery.matches);
    mediaQuery.addEventListener("change", handleOrientationChange);

    return () => {
      mediaQuery.removeEventListener("change", handleOrientationChange);
    };
  }, []);

  return (
    <div id="main" className={isLandscape ? "landscape" : "portrait"}>
      <Player player={"player1"} setShowPopup={setShowPopup} />
      <Board board={board} setBoard={setBoard} />
      <Player player={"player2"} setShowPopup={setShowPopup} />
      {showPopup && <Popup type={"menu"} setShowPopup={setShowPopup} />}
    </div>
  );
}

export default App;
