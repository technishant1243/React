import React, { useState } from 'react'
import Login from './Login';
import Welcome from "./Welcome"
const Components11 = () => {
    // useEffect(FcCallback,dependecylist)

const [show,setShow]=useState(false);
  return (
    <div>
      <h3>Inside Component-A</h3>
      {show ? <Welcome/>:<Login/>}
      <button onClick={()=>setShow(!show)}>Toggle</button>
    </div>
  )
}

export default Components11
