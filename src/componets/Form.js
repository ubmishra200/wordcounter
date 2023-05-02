import React, { useState } from 'react'

function Form() {
  const [val, setvalue]=useState('');
  const[word,setword]=useState(0);
  const handlechange=(e)=>{
    const data= e.target.value.split(" ");
    if(e.target.value===" ")
     { setword(0);}
     
    setvalue(e.target.value);
    setword(data.length);
    
  }
  return (
    <div className='row' >
    
 
     <div className='col-md-3'>
      <img class="rounded-circle img-thumbnail" alt="avatar1" src="mypic.jpeg" />
      <h3 className='ml-4 text-primary'>Powered By,</h3>
      <h3 className='ml-5 text-dark'>Uday Mishra</h3>
      </div>
      <div className='col-md-9'>
      <div className="card bg-dark text-light">
     <div className="card-body">
       <h5 className="card-title">Word Counter</h5>
    
     < textarea className="form-control bg-dark text-light"  rows="4" value={val} onChange={(e)=>handlechange(e)}/>
     <h1>count word {word}</h1>
      <h1>count Letter {val.length}</h1>
     </div>
     </div>
     </div>
    </div>
  )
}

export default Form