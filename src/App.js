import logo from './logo.svg';
import React, { useState } from "react";

import './App.css';

function App() {
  const [inputList, setInputList] = useState([{ topic: "", duration: "", fees: "" }]);
  const [oNe, setoNe] = useState([{ subtopic: "" }])
  // handle input change
  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    setInputList(list);
  };

  // handle click event of the Remove button
  const handleRemoveClick = index => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  };

  // handle click event of the Add button
  const handleAddClick = () => {
    setInputList([...inputList, { topic: "", duration: "", fees: "", subtopic: "" }]);
  };

  const handleAddClickOne = () => {
    // setoNe([...oNe],{subtopic:""})
    const values = [...oNe];
    values.push({ value: null });
    setoNe(values);
  }


  const handleRemoveClickOne = (index) => {
    const list1 = [...oNe];
    list1.splice(index, 1);
    setInputList(list1);
  }

  return (
    <div className="App">

      {inputList.map((x, i) => {
        return (
          <div className="box">
            <input
              name="topic"
              placeholder="Enter Topic Name"
              value={x.firstName}
              onChange={e => handleInputChange(e, i)}
            />
            <input
              className="ml10"
              name="duration"
              placeholder="Enter Duration"
              value={x.lastName}
              onChange={e => handleInputChange(e, i)}
            />
            <input
              className="ml10"
              name="fees"
              placeholder="Enter Fees"
              value={x.lastName}
              onChange={e => handleInputChange(e, i)}
            /><br />

            {oNe.map((a, b) => {
              return (
                <input
                  className="ml10"
                  name="subtopic"
                  placeholder="Enter Sub-Topic"
                  value={a.lastName}
                  onChange={e => handleInputChange(e, b)}

                />
              )

            })}


            { <button
              className="mr10"
              onClick={() => handleRemoveClickOne()}>-</button>}
            <button onClick={handleAddClickOne}>+</button>



            <div className="btn-box">
              {inputList.length !== 1 && <button
                className="mr10"
                onClick={() => handleRemoveClick(i)}>Remove</button>}
              {inputList.length - 1 === i && <button onClick={handleAddClick}>Add</button>}
            </div>
          </div>
          
        );
      })}
     
      <div style={{ marginTop: 20 }}>{JSON.stringify(inputList)}</div>
    </div>
  );
}

export default App;
