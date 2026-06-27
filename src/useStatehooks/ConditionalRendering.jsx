import React from 'react'
import { useState } from 'react'

const ConditionalRendering = () => {
    const [isLogin,setIslogin]=useState(false);
return (
    <div>
        {isLogin ? <h1>Welcome User</h1> : <h1>Please Login</h1>}
        <button onClick={()=> setIslogin(!isLogin)}>
            {isLogin ? "Logout" : "Login"}
            </button>
    </div>
  )
}

export default ConditionalRendering
