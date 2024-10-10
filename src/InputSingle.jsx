import { useState } from 'react'
//import GuessCounter from './GuessCounter'
import './Input.css'

export default function InputSingle(){
    const [guess, setGuess] = useState(0)
    const [char, setChar] = useState("")

    function handleCharGuess() {
        //setGuess(guess + 1)
        //console.log(guess)
      fetch('http://localhost:8080/counter/add', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
      },
      })
      async function fetchData() {
        const result = await fetch("http://localhost:8080/word")
        const body = await result.json()
        console.log(body)
        //console.log(parse(body.guess))
        var GuessCount = JSON.parse(JSON.parse(body.counter))
        console.log(GuessCount)
        setGuess(GuessCount)
      }
      fetchData()
    }
    

    return (
        <>
        <label>
            <input id="inputSingle" value={char} name="charGuess" maxLength="1" onChange={(e) => {setChar(e.target.value)}}/>
            <button type="button" onClick={handleCharGuess}>Guess a char</button>
            <span>Guesses made: {guess}</span>
        </label>
        
        </>
    )
    
}