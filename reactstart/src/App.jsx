import { useState } from "react"


function App() {
  let [counter, setCounter] = useState(0)
  // let counter = 5
  const addValue = ()=>{
    setCounter (counter + 1)
  }
  const decreaseValue = ()=>{
    
    setCounter (counter - 1 )
  }

  return (
    <>
    <h1>helloo world | Ikrama</h1>
    <h2>Counter Value = {counter}</h2>
    <button onClick={addValue} >Add Value  </button> <br />
    <button onClick={decreaseValue}>Decrease Value  </button>
    </>
   
  )
}

export default App
