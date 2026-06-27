import React from 'react'
import { useState } from 'react'
//!Hooks are Build in javascript functions that functional components are 
//!Usesatate ek array retrun karta hai [state,setState]
const Counter = () => {
  const [state,setState]  = useState(0);
    const decrement = () => state > 0 ? setState(state-1):setState(state);
  return (
    <div>
      <h1>{state}</h1>
      <button onClick={()=>{setState(state+1)}}>Increment</button>
      <button onClick={()=>{decrement()}}>Decrement</button>
      <button onClick={()=>{setState(0)}}>Reset</button>
    </div>
  )
}

export default Counter
