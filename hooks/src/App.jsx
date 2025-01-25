import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {


  let [counter, setCounter] = useState(15);

  // let counter = 15;

  const addValue = () => {
    // console.log("Value: ", Math.random());
    counter = counter + 1;
    // console.log(counter);
    setCounter(counter);
  }
  const decreaseValue = () => {
    setCounter(counter - 1);
  }
  return (
    <>
      <h1>React Hooks</h1>
      <h2>Counter value: {counter} </h2>

      <button onClick={addValue}>Increase Value {counter} </button>
      <br />
      <button onClick={decreaseValue}>Decrease Value {counter} </button>
    </>
  )
}

export default App
