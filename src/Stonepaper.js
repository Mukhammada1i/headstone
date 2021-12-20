import React, {useState} from "react";

const Stonepaper= () => {
    const [player, setPlayer] = useState('')
    const [comp, setComp] = useState('')
    const [result,setResult] = useState('')

    const playerClick = (playerAction) => {
        const action = ['stone', 'scissors', 'paper']
        const compAction = action[Math.floor(Math.random())]


        setComp(compAction)
        setPlayer(playerAction)

        if(compAction === playerAction) {
            setResult('по нулям')
        }else if(
            ( playerAction === 'paper' && compAction === 'stone')
            ||(playerAction === 'stone' && compAction === 'scissors')
            || (playerAction === 'scissors' && compAction === 'paper')
        ) {
            setResult('your lost')
        }else{
            setResult('you lost')
        }

    }

    return (
        <div>
            <button onClick={() => playerClick('stone')} type="button">stone</button>
            <button onClick={() => playerClick('scissors')} type="button">scissors</button>
            <button onClick={() => playerClick('paper')} type="button">paper</button>
            <span>{result}</span>
            <hr/>
            <div className="row">
                <div className="col-6">player: {player}</div>
                <div className="col-6">bot: {comp}</div>
            </div>
        </div>
    )
}

export default Stonepaper