import { useState } from 'react'
import './Input.css'

export default function InputSingle(){
    const [char, setChar] = useState("")
    function handleCharGuess() {
        console.log(char)
    }

    return (
        <>
        <label>
            <input id="inputSingle" value={char} name="charGuess" maxLength="1" onChange={(e) => {setChar(e.target.value)}}/>
            <button type="button" onClick={handleCharGuess}>Guess a char</button>
        </label>
        </>
    )
    
}