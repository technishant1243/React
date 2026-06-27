import React from 'react'
import { useState } from 'react'

const Light = () => {
    const [isON ,setIsON]=useState(false);
  return (
    <div>
      <h1>{isON ? "Light on 💡💡" : "Light off  "}</h1>
      <button onClick={()=>setIsON(!isON)}>Toggle button</button>
    </div>
  )
}

export default Light
