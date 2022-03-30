import React, { useState } from 'react'
import './form.css'

export default function Form() {
    const[inputList , setInputList]=useState([{subtopic:""}])

    const handleinputChange = (e,index) =>{
        const {name,value}=e.target;
        const list=[...inputList];
        list[index][name]=value;
        setInputList(list);
    }

    const handleClick =()=>{
        setInputList([...inputList, { subtopic: "" }]);
    }

    

  return (
     

      
    <div className='abc'>

        <input type='text' name='course' onChange={handleinputChange} placeholder='Enter Topic' />
        <input type='text' name='duration' onChange={handleinputChange} placeholder='Enter Duration' />
        <input type='text' name='fees' onChange={handleinputChange} placeholder='Enter Fees' /><br/>

        <input type='text' name='subtopic' onChange={e => handleinputChange(e)}  placeholder='Enter Sub Topic' /> 


        <button onClick={handleClick}>Add</button>


        <div style={{ marginTop: 20 }}>{JSON.stringify(inputList)}</div>
    </div>
    
  )
}
