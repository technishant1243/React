import React, { useState } from "react";
import { GoEyeClosed } from "react-icons/go";
import { IoEye } from "react-icons/io5";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  // const[showpassWord,setPassword1]=useState(false);


  const handleData = (e) => {
    e.preventDefault();

    const user = {
      email,
      password,
    };

    // Store data in localStorage
    localStorage.setItem("user", JSON.stringify(user));

    console.log("Stored Data:", user);
  };

  return (
    <div>
      <form onSubmit={handleData}>
        <h1>Login Here</h1>

        <br />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          placeholder="Enter Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />



        <br />
        <br />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          placeholder="Enter Your Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)} />


          <div style={{position:"absolute",top:"50%",right:"15px"}}
              onClick={()=>setPassword(!password)}>
                  {setPassword ? <GoEyeClosed/> : <IoEye/>}
          
              </div>
          
          

        <br />
        <br />

        <button type="submit">Login Here</button>
      </form>
    </div>
  );
};

export default Login;
