import { useState } from 'react'
import './Input.css'

export default function InputFull(){
    const [wordGuess, setWordGuess] = useState("")
    function handleWordGuess() {
        console.log(wordGuess)
    }

    return (
        <>
        <label>
            <input id="inputGuess" value={wordGuess} name="wordGuess" onChange={(e) => {setWordGuess(e.target.value)}}/>
            <button type="button" onClick={handleWordGuess}>Guess word</button>
        </label>
        </>
    )
    
}