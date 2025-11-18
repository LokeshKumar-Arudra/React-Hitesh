import { useState } from 'react'
import './App.css'

// the main purpose of prevCounter is to get the latest state value when the state update is asynchronous or batched.
function App() {
  const [counter, setCounter] = useState(0);

  const AddValue = () => { 
    setCounter(counter + 1);
    setCounter((prevCounter) => prevCounter +3);  
    console.log(counter);
  }

  const RemoveValue = () => {
    setCounter(counter - 1);
    setCounter((prevCounter) => prevCounter -2);
    console.log(counter);
  }
  return (
    <>
      <h1>Lokesh</h1>
      <h2>Counter Value : {counter}</h2>
      <button onClick={AddValue}>Add Value</button>
      <button onClick={RemoveValue}>Remove value</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
