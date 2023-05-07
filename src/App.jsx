import { useState } from "react";
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

  return (
    <div id="main">
      <Player player={"player1"} setShowPopup={setShowPopup} />
      <Board board={board} setBoard={setBoard} />
      <Player player={"player2"} setShowPopup={setShowPopup} />
      {showPopup && <Popup type={"menu"} setShowPopup={setShowPopup} />}
    </div>
  );
}

export default App;
