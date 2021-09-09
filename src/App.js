import React, { useState } from "react";
import './App.css';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';

function App() {

  const [myValue, setMyValue] = useState("");
  const [myArr, setMyArr] = useState([]);

  const changeEvent =(event)=>{
    setMyValue(event.target.value);
  }

  const clickEvent =()=>{
    setMyArr((preValue)=>{
      return [...preValue, myValue]
    });
    setMyValue("")
  }

  const delIcon =(id)=>{
      setMyArr((oldArr)=>{
        return oldArr.filter((temp, i)=>{
          return i !== id
        })
      })
  }

  return (
    <>
      <div className="main-div">
        <h1>ToDo List</h1>
        <div className="input-div">
          <input type="text" onChange={changeEvent} placeholder="Enter Item Here" value={myValue} />
          <AddIcon className="AddIcon" onClick={clickEvent} />
        </div>
        <ul>
          {myArr.map((val, id)=>{

            return (<div className="div">
              <DeleteIcon className="delIcone" onClick={()=>delIcon(id)} />
              <li>{val}</li>
            </div>)
          })}
          
        </ul>
      </div>
    </>
    
  );
}

export default App;
