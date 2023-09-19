import '@trendmicro/react-sidenav/dist/react-sidenav.css'
import React, {useEffect, useState } from 'react';

function MyQuestions(){

   //const [firstName, setFirstName] = useState('');
  const data  = Object.keys(localStorage);
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  // Load the selected option from local storage when the component mounts
  useEffect(() => {
    const storedOption = localStorage.getItem('selectedOption');
    if (storedOption) {
      setSelectedOption(JSON.parse(storedOption));
    }
  }, []);

  // Store the selected option in local storage whenever it changes
  useEffect(() => {
    if (selectedOption) {
       const select = localStorage.length  + 1;
      localStorage.setItem(select, JSON.stringify(selectedOption));
    }
  }, [selectedOption]);


  return(
  <div>
     {
        data.map((data , id) => {
          const questions = JSON.parse(localStorage.getItem(data));

          return(
            <div key="id">
            <h1>{questions}</h1>
            <label><input type="radio" name= "id" value="Agree" checked={selectedOption === ' '} onChange={handleOptionChange} />Agree</label>
            <label> <input  type="radio" name= "id" value="Neutral" checked={selectedOption === ' '} onChange={handleOptionChange} />Neutral</label>
            <label> <input type="radio" name= "id" value="Disagree" checked={selectedOption === ' '} onChange={handleOptionChange} />Disagree</label>
            </div>
          )})
     }
  </div>
  );

}


export  default MyQuestions;