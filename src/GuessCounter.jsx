import { useState } from 'react'

export default function GuessCounter(){
    const [guess, setGuess] = useState("")
    

    return (
        <>
        <h3>Guess counter</h3>
        <h1>{guess}</h1>
        </>
    )
    
}