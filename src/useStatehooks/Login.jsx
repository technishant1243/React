import React from 'react';
import { useState } from 'react';

const Login = () => {
    // const[state,setState]=useState();
  return (
    <div>
        <form>
        <h1>Login Here</h1>
        <br/>
      <label htmlFor='email'>Email</label>
      <input type="email" placeholder='Enter Your Email' id="email"/>
      <br/>
      <br/>
      <label htmlFor='password'>Password</label>
      <input type="password" placeholder='Enter your Password' id="password"/>
      <br/>
      <br/>
      <button>Login Here</button>
      </form>
    </div>
  );
};

export default Login
