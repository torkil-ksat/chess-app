import { useState, useEffect } from 'react';
import Board from './components/Board';
import Player from './components/Player';
import Popup from './components/Popup';

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
    const [warnings, setWarnings] = useState(['', '']);
    const [deadPieces, setDeadPieces] = useState([[], []]);
    useEffect(() => {
        const handleOrientationChange = (e) => {
            setIsLandscape(e.matches);
        };

        const mediaQuery = window.matchMedia('(orientation: landscape)');
        setIsLandscape(mediaQuery.matches);
        mediaQuery.addEventListener('change', handleOrientationChange);

        return () => {
            mediaQuery.removeEventListener('change', handleOrientationChange);
        };
    }, []);

    return (
        <div id="main" className={isLandscape ? 'landscape' : 'portrait'}>
            <Player
                player={'player1'}
                setShowPopup={setShowPopup}
                wins={score[0]}
                setPlayerPopup={setPlayerPopup}
                warning={warnings[0]}
                deadPieces={deadPieces[1]}
            />
            <Board
                board={board}
                setBoard={setBoard}
                warnings={warnings}
                setWarnings={setWarnings}
                deadPieces={deadPieces}
                setDeadPieces={setDeadPieces}
            />
            <Player
                player={'player2'}
                setShowPopup={setShowPopup}
                wins={score[1]}
                setPlayerPopup={setPlayerPopup}
                warning={warnings[1]}
                deadPieces={deadPieces[0]}
            />
            {showPopup && (
                <Popup
                    type={'menu'}
                    setShowPopup={setShowPopup}
                    startingConfig={startingConfig}
                    setBoard={setBoard}
                    player={playerPopup}
                    score={score}
                    setScore={setScore}
                    setDeadPieces={setDeadPieces}
                />
            )}
        </div>
    );
}

export default App;
