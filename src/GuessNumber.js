import React, {useState} from "react";

const GuessNumber = () => {
    const [input, setInput] = useState('')
    const [guessNumber, setGuessNumber] = useState('')
    const [message, setMessage] = useState('')
    const [number, setNumber] = useState(Math.round(Math.random() * 11) +1)

    const playerAction = (e) => {
        setInput(e.target.value)
    }

    const playerClick = (a) => {
        if (+input === number ){
            setMessage('you won')
        }else{
            setMessage('try again')
        }

    }

    return (
        <div>
            <input onChange={playerAction} type='number'/>
            <button onClick={playerClick}>click</button>
            <span>{message}</span>
        </div>
    )
}


export default GuessNumber
