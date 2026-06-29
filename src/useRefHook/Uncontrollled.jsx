import React, { useRef } from 'react'

const Uncontrollled = () => {
    const emailRef=useRef("");
    const passwordRef=useRef("");

    console.log("Uncontrolled form");

    const handleLogin=(e)=>{
        e.preventDefault();

        console.log(emailRef.current.value);
        console.log(passwordRef.current.value);
    }

  return (
    <form action="" onSubmit={handleLogin}>
    <div>
      <label htmlFor='inpu1'>Email</label>
      <input 
      type="email"
      id="input1"
      ref={emailRef}
      placeholder='Enter your email'
      />
    </div>
    <br/>
    <div>
        <label htmlFor='inpu2'>Password</label>
      <input 
      type="password"
      id="inpu2"
      ref={passwordRef}
      placeholder='Enter your password'
      />
    </div>

    <br/>

    <div>
        <button type="submit">Login</button>
        <button type="reset">Cancel</button>
    </div>
    </form>
  )
}

export default Uncontrollled
