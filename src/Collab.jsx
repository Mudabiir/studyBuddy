import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Collab() {
  // const [user] =  useAuthState(auth);
  const [input,setInput] = useState("");
  const navigate = useNavigate();
  const submitHandler = () => {
    navigate(`/collab/room/${input}`)
  }
  return (
    
    <div>
      <div>
        <input value={input} onChange={(e)=>setInput(e.target.value)} type="text" placeholder='Enter your room  name.../' />
        <button onClick={submitHandler}>Join</button>
      </div>
    </div>
  //  <Link to='/collab/room/:id'> to video calling.. </Link> 
  );
}


 


export default Collab;
