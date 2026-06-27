import React from 'react'
import { useState } from 'react';
import { FaEye,FaEyeSlash } from "react-icons/fa6";
const PasswordInput = () => {
    const [showpassWord, setPassword]=useState(false);
return (
<div style={{position:"relative",width:"250px"}}>
    <label htmlFor='inp1'>password</label>
    <input type={showpassWord ? "text" : "password"} id="inp1" placeholder='at least 8 characters'
    style={{width :"90%" ,padding :"5px 10px"}}
    />
    {/* <button onClick={()=>setPassword(!showpassWord)}>{showpassWord ? "Hide": "show"}</button> */}

    <div style={{position:"absolute",top:"50%",right:"15px"}}
    onClick={()=>setPassword(!showpassWord)}>
        {showpassWord ? <FaEyeSlash/> : <FaEye/>}

    </div>



    </div>
  );
};
export default PasswordInput
