import { useState } from "react";
import Board from "./components/Board";
import Player from "./components/Player";

function App() {
  return (
    <div id="main">
      <Player player={"player1"} />
      <Board />
      <Player player={"player2"} />
    </div>
  );
}

export default App;
