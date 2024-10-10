import { useState } from 'react'
//mport GuessCounter from './GuessCounter'
import './Input.css'

export default function InputFull(){
    const [wordGuess, setWordGuess] = useState("")
    const [guess, setGuess] = useState(0)

    function handleWordGuess() {
        console.log(wordGuess)
        fetch('http://localhost:8080/counter/add', {  //Going to remake this part, 1 guess word if wrong should reset all
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
            var GuessCount = JSON.parse(JSON.parse(body.counter))
            console.log(GuessCount)
            setGuess(GuessCount)
          }
          fetchData()
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