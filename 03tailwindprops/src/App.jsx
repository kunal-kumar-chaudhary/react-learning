import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card.jsx'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username: "kunal",
    age: 22
  }

  return (
    <>
    <Card someObj={myObj}/>
    </>
  )
}

export default App
