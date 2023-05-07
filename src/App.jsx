import { useState, useEffect } from "react";
import Board from "./components/Board";
import Player from "./components/Player";
import Popup from "./components/Popup";

function App() {
  // Positives are player1, negatives are player2
  const startingConfig = [
    [2, 4, 3, 6, 5, 3, 4, 2],
    [1, 1, 1, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [-1, -1, -1, -1, -1, -1, -1, -1],
    [-2, -4, -3, -5, -6, -3, -4, -2],
  ];
  const [board, setBoard] = useState(startingConfig);
  const [showPopup, setShowPopup] = useState(false);
  const [isLandscape, setIsLandscape] = useState(false);
  const [score, setScore] = useState([0, 0]);
  const [playerPopup, setPlayerPopup] = useState();

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
      <Player
        player={"player1"}
        setShowPopup={setShowPopup}
        wins={score[0]}
        setPlayerPopup={setPlayerPopup}
      />
      <Board board={board} setBoard={setBoard} />
      <Player
        player={"player2"}
        setShowPopup={setShowPopup}
        wins={score[1]}
        setPlayerPopup={setPlayerPopup}
      />
      {showPopup && (
        <Popup
          type={"menu"}
          setShowPopup={setShowPopup}
          startingConfig={startingConfig}
          setBoard={setBoard}
          player={playerPopup}
          score={score}
          setScore={setScore}
        />
      )}
    </div>
  );
}

export default App;
