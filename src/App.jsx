import { useState, useEffect } from 'react'
import './App.css'


function App() {
  const [word, setWord] = useState("")
  const [wordArr, setWordArr] = useState([])

  /*useEffect(() => {
    async function fetchData() {
      const result = await fetch("http://localhost:8080/word")
      const body = await result.json()
      setWord(body)
      const arr = [...word]
      setWordArr([...word])
    }
    fetchData()
  }, []);*/


  return (
    <>
      <h1>Displaying random word from API</h1>
      <h2></h2>
      
        
    </>
  )
}

export default App
