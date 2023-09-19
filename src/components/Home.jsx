import React, { useState } from 'react';
import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai';


function MysideNav(){


   const [question, setQuestion] = useState('');
 
  const data  = Object.keys(localStorage);

  const handleDelete = (id) => {
    // Remove the user with the given id from local storage
    localStorage.removeItem(id);
    window.location.reload();
  }

  const handleAdd =(e)=> {
    const id = localStorage.length  + 1;
    localStorage.setItem(id , JSON.stringify(question));
    setQuestion("");

  };

  return( 
  <div>  
    <h1 style={{color: "red"}}>Create a Qustionnaire</h1>
          <input
            value={question}
            onChange={(e)=>setQuestion(e.target.value)}
            placeholder='Questions'
          />
          <button className='btn' onClick={handleAdd}>Add</button>
          <h1 style={{color: "red"}}>List of Questions</h1>

     {
        data.map((data , id) => {
          const questions = JSON.parse(localStorage.getItem(data));
          
          return(
            <div key = {id}>
            <h1>{questions}</h1>
            <icon className='delete' onClick={()=>handleDelete(data)}><AiOutlineEdit size={30} /></icon>
            <icon className='delete' onClick={()=>handleDelete(data)}><AiOutlineDelete size={30} /></icon>
            </div>
            )
        })
     }
  </div>
  );

}

export  default MysideNav;