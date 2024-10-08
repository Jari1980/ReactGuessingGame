import { useState, useEffect } from 'react'
import './Word.css'

function Word(){
    const [word, setWord] = useState("")

    useEffect(() => {
        async function fetchData() {
          const result = await fetch("http://localhost:8080/word")
          const body = await result.json()
          const text = body.word
          setWord(text)
        }
        fetchData()
      }, []);
      
      var arr =[...word]
      console.log(arr)
      var elements = word.length
      
    
    console.log(word)
    
      
    return (   
    <>
      <h1>{word}</h1>
      <h2>Elements: {elements}</h2>
      <ul>
        {arr.map(arr =>
            <li><a>{arr}</a></li>
        )}
      </ul>
            
    </>
    );
      

    
}

export default Word