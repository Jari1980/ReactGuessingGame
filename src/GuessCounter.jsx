import { useState } from 'react'
import InputSingle from './InputSingle'

export default function GuessCounter({parentToChild}){
    //const [guess, setGuess] = useState(0)
    

    return (
        <>
        <h3>Guess counter</h3>
        <h1>{parentToChild}</h1>
        </>
    )
    
}