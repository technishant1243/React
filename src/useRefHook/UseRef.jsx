import React, { useState ,useRef, useEffect} from 'react'

const UseRef = () => {
    const[count,setCount]=useState(0);
    const countRef=useRef(0);
    countRef.current=count;
    console.log("Counter Render");

    useEffect(()=>{
        setInterval(()=>{
            console.log("count",countRef.current);
        },1000);
    },[]);

    console.log("Counter Render");
  return (
    <div>
      <h2>Count:</h2>
      <button>Click</button>
      <h2>Count(state):{count}</h2>
      <button onClick={()=> setCount(count+1)}>Add count</button>
    </div>
  )
}

export default UseRef
