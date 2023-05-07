import { useState } from "react";
import Board from "./components/Board";
import Player from "./components/Player";

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

  return (
    <div id="main">
      <Player player={"player1"} />
      <Board board={board} setBoard={setBoard} />
      <Player player={"player2"} />
    </div>
  );
}

export default App;
