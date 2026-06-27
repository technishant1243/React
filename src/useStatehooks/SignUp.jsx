import React from 'react'
import { useState } from 'react';
import Login from './Login';

const SignUp = () => {
    const [formData,setFormData]=useState({
        username:"",
        email:"",
        phoneNo:"",
        password:"",
    });

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(e.target.username.value);
        console.log(e.target.email.value);
        console.log(e.target.password.value);
        console.log(e.target.phoneNo.value);
    }
  return (
    <div>
    <form>
      <label htmlFor='UserName'>Usename</label>
      <input type="text" placeholder='Enter your Name' id="username" onClick={handleSubmit}/>
      <br/>
      <br/>
      <label htmlFor='email'>Email</label>
      <input type="email" placeholder='Enter Your Email' id="email" onClick={handleSubmit}/>
      <br/>
      <br/>
      <label htmlFor='phoneNo'>PhoneNo</label>
      <input type="text" placeholder='Enter your Phone' id="phoneNo" onClick={handleSubmit}/>
      <br/>
      <br/>
      <label htmlFor='password'>password</label>
      <input type="password" placeholder='Enter your password' id="password" onClick={handleSubmit}/>
      <br/>
      <br/>
      <button onClick={handleSubmit}>Submit</button>
      {/* <p>Already have an Account {Login}</p> */}
      </form>
      
    </div>

  )
}

export default SignUp
