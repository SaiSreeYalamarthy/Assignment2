import {React, useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'
import './App.css';


// Creating a function to display inventory
const InventoryPage = () => {   
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
        mode: 'cors',
        credentials: 'include'
      };
      
    const [inventory, setInventory]= useState([]);
useEffect(()=>{
    axios.get("http://localhost:3000/invt", requestOptions)
    .then(res=> setInventory(res.data))
    .catch(err => console.log(err))
});

// Creating function to delete items
const handleItemDelete = (id) => {
    axios.delete(`http://localhost:3000/delete/${id}`)
      .then(() => {
        const updinvt = inventory.filter(item => item._id !== id);
        setInventory(updinvt);
      })
      .catch(err => console.log(err))
  };
return(
<table className="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Brand</th>
          <th>Quantity</th>
          <th>PricePerUnit</th>
          <th>Update</th>
          <th>Delete</th>
          
        </tr>
      </thead>
      <tbody>
        {inventory.map(invt => (
          <tr key={invt._id}>
            <td>{invt.name}</td>
            <td>{invt.brand}</td>
            <td>{invt.quantity}</td>
            <td>{invt.priceperunit}</td>
            <td><button>update</button></td>
            <td>
                <button onClick={() => handleItemDelete(invt._id)}>Delete</button>
            </td>
            
          </tr>
        ))}
      </tbody>
    </table>
)
        }
    export default InventoryPage;