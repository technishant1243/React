import React from 'react'
import { useEffect } from 'react'

const Login = () => {
    useEffect(()=>{
        console.log("Login useEffect");
        return ()=>console.log("Login Cleanup");
    },[]);
  return (
    <div>
      <h3>please Login</h3>
    </div>
  )
}

export default Login
