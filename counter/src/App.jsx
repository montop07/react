import { useState } from 'react';

function App() {
  let [counter,setcounter]=useState(0)
    const addValue=()=>{
    if(counter<20){
    counter = counter+1
    setcounter(counter)
    }
  }
  const decreasevalue=()=>{
    if(counter>0){
      counter = counter-1
      setcounter(counter)
      }
  }
  return (
    <>
    <h1>Hi Manas</h1>
    <h2>Counter value:{counter}</h2>
    <button onClick={addValue}>Add</button>
    <br/>
    <button onClick={decreasevalue}>Decrease</button>
    </>
  )
}

export default App;
