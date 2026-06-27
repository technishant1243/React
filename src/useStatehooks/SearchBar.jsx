import React, { useState } from 'react'

const SearchBar = () => {
    const[searchvalue,setSearchValue]=useState("");
    const handleChange=(e)=>{
        console.log(e.target.value);
        setSearchValue(e.target.value);
    }
    console.log("Search bar Componet")
  return (
    <div>
      <label htmlfor="input1">Enter Something</label><br/>
        <input  type="text" id="input1" value={searchvalue} onChange={handleChange} placeholder='Search here....'/>

        <button>Search</button>
      
    </div>
  )
}

export default SearchBar
