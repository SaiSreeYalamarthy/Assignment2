import {React, useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'
import './App.css';


// Creating function to Display all users in the page
const AllUsers = () => {
    
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
        mode: 'cors',
        credentials: 'include'
      };
      
    const [allusr, setAllusr]= useState([]);
useEffect(()=>{
    axios.get("http://localhost:3000/getalluser", requestOptions)
    .then(res=> setAllusr(res.data))
    .catch(err => console.log(err))
});
return(
<table className="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Username</th>
          <th>Bio</th>
          
        </tr>
      </thead>
      <tbody>
        {allusr.map(alus => (
          <tr key={alus._id}>
            <td>{alus.name}</td>
            <td>{alus.username}</td>
            <td>{alus.bio}</td>            
          </tr>
        ))}
      </tbody>
    </table>
)
        }
    export default AllUsers;