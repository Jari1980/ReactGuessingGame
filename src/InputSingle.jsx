import { useState } from 'react'
import GuessCounter from './GuessCounter'
import './Input.css'

export default function InputSingle(){
    const [guess, setGuess] = useState(0)
    const [char, setChar] = useState("")
    function handleCharGuess() {
        //setGuess(guess + 1)
        console.log(char)
        //const parentToChild = () => {
            setGuess(guess + 1)
            console.log(guess)
      //  }
    
    }
    //const parentToChild = () => {
        //setGuess(guess + 1)
      //  console.log(guess)
    //}

    return (
        <>
        <label>
            <input id="inputSingle" value={char} name="charGuess" maxLength="1" onChange={(e) => {setChar(e.target.value)}}/>
            <button type="button" onClick={handleCharGuess}>Guess a char</button>
        </label>
        <GuessCounter parentToChild={guess} />
        </>
    )
    
}