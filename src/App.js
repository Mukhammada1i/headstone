import React, {useState} from "react";
import Stonepaper from "./Stonepaper";
import GuessNumber from "./GuessNumber";
const App = () => {
    const [game, setGame] = useState(null)


    return (
        <div>
            {
                !game && <div className="menu">
                    <button onClick={() => setGame(1)} type="button">stone,paper,scissors</button>
                    <hr/>
                    <button onClick={() => setGame(2)} type="button">search number</button>
                </div>
            }
            {game === 1 && <Stonepaper/>}
            {game === 2 && <GuessNumber/>}
        </div>
    );
}
export default App


