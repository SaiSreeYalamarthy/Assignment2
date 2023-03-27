import {React, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Axios from 'axios'

import './App.css';
//import Home from './Home.js';
function App() {
  const [num1,setNum1] = useState();
  const [num2,setNum2] = useState();
  const [tot, setTot] = useState();
  const [totserv,setTotserv] = useState();
  

    // const [inputText, setInputText] = useState("Sai sree");
    // const [inputText1, setInputText1] = useState("graduate student");
    // const edit=()=>{
    //   setFirst()
    // }

  const[first,setFirst]=useState(null);
  const[second,setsecond]=useState("In software development, agile practices sometimes ");
  const[r1,setR1]=useState();
  const[r2,setR2]=useState();
  const addition=()=>{
    setR1(Number(num1)+Number(num2));
    setR2(Number(num1)+Number(num2));
    Axios.get(`http://localhost:3000/add/${first}/and/${second}`).then((response)=>{
      setR2(Number(response.data.addResult));
      console.log(response.data.addResult);
    });
  }
  
  function handleEvent()
  {
    debugger;
    let c=0;
    Axios.get(`/api/sum/${num1}/and/${num2}`).then( (result)=>
    {
      console.log(result.data);
      setTotserv(result.data.Sum);
    });
  }
  return (
    <><div>


      <img src={"https://cdn.vectorstock.com/i/preview-1x/33/63/person-gray-photo-placeholder-woman-vector-22863363.jpg"} width="150" height="200" alt="nNOt"></img>
   <p name="first"> Name:   {first}</p>
   <p name="second" defaultValue={"In software development, agile practices (sometimes wrii"}> Desription:  {second}</p>
      {/* <div className="container">In software development, agile practices (sometimes written "Agile")
      </div> */}
      
      <br></br>
      <br></br><form>
        
      <label>Edit name:</label><input type="text" placeholder='' defaultValue={"Sai Sree"} onChange={(event)=>{
         setFirst(event.target.value);
      }} ></input>


      <br></br>
    <br></br>
      <label>Edit desription:</label><input type="text" placeholder='' defaultValue={""} onChange={(event)=>{
        setsecond(event.target.value);
      }
      } ></input>
     
      </form>
    </div><div className="App">
        <div className="container">
         <form action="http://localhost:3000" method="post">
          <input type="submit" value="Show Inventory"/>
        </form>
          <h1> Sum of two Number </h1>

          <label align="center">Enter first Number : </label>
          <input type="text" name="num1" id="num1" onChange={(event) => {
            
            setNum1(event.target.value);
          } }>
          </input>
          <br></br><br></br>

          <label align="center">Enter second Number : </label>
          <input type="text" name="num2" id="num2" onChange={(event) => {
            
            setNum2(event.target.value);
          } }></input>

          <br></br><br></br>
          <button onClick={addition}>Submit</button>
          <br></br><br></br>

          <label>Your Addition result form the server is : {r2}</label>
          <br></br><br></br>

          <label>Your Addition result from  Reactjs is   : </label>

          <input type="text" value={r1} defaultValue="0"></input>
        </div>
      </div></>
    
    
  );
}
export default App;
