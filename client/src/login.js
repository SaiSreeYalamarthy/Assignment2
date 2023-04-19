import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {useNavigate} from "react-router-dom"
import React, { useState } from 'react';
import axios from 'axios';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';


// Creating a function to login page
function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
let navigate = useNavigate;
  function handleUsernameChange(event) {
    setUsername(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    axios.post('http://localhost:3000/checklogin', {
      username: username,
      password: password
    })
    .then(response => {
      alert("login successful")
      navigate('/')
    })
    .catch(error => {
      alert("invalid")
    });
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input type="text" value={username} onChange={handleUsernameChange} />
      </label>
      <label>
        Password:
        <input type="password" value={password} onChange={handlePasswordChange} />
      </label>
      <button type="submit">Log In</button>
    </form>
  );
}

export default Login;

