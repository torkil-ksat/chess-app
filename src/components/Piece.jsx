import React from "react";

import { ReactComponent as Pawn } from "../assets/pawn.svg";
import { ReactComponent as Rook } from "../assets/rook.svg";
import { ReactComponent as Bishop } from "../assets/bishop.svg";
import { ReactComponent as Knight } from "../assets/knight.svg";
import { ReactComponent as Queen } from "../assets/queen.svg";
import { ReactComponent as King } from "../assets/king.svg";

function Piece({ player: player, piece: piece }) {
  let icon;
  switch (piece) {
    case 1:
      icon = <Pawn width="100%" height="100%" />;
      break;
    case 2:
      icon = <Rook width="100%" height="100%" />;
      break;
    case 3:
      icon = <Bishop width="100%" height="100%" />;
      break;
    case 4:
      icon = <Knight width="100%" height="100%" />;
      break;
    case 5:
      icon = <Queen width="100%" height="100%" />;
      break;
    case 6:
      icon = <King width="100%" height="100%" />;
      break;
    default:
      break;
  }
  return <div className={"piece " + player}>{icon}</div>;
}

export default Piece;
