import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// in this tutorial we will learn about useState hook
// every hooks have a specific task  

function App() {

  let [counter, setCounter] = useState(0) // useState is a hook
  // useState is a function which takes a initial value as a parameter
  // and return a array of two elements
  // first element is a state variable
  // second element is a function which is used to update the state variable
  // useState hook is used to update the state variable
   
  const addValue = () => {
   counter = counter + 1;
   setCounter(counter); 
    
  }
  const removeVal = () => {
    counter = counter - 1;

    // below logic will not let the counter value to go below 0
    if (counter < 0) {
      counter = 0;
    }
    else {
      counter = counter;
    }
    setCounter(counter);
  }

   return (
    <>
    <h1>hello world</h1>
    <h2>counter value: {counter}</h2>
    <button onClick={addValue}>Add Value</button>
    <br />
    <button onClick={removeVal}>Remove Value</button>
    <p>another place displaying the counter value: {counter}</p>
    </>
  )
}

export default App
