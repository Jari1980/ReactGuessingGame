import './Input.css'

export default function InputSingle(){

    return (
        <>
        <label>
            Guess a character in the word above
            <input id="inputSingle" name="charGuess" maxlength="1"/>
        </label>
        </>
    )
    
}