import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React, { useState } from 'react';
import axios from 'axios';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';


// Creating a function to create signup page
const Signup = () => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [bio, setBio] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3000/saveuser', { name, username, password ,bio })
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label for="name">Name</Label>
        <Input type="text" name="name" id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter your name" required />
      </FormGroup>
      <FormGroup>
        <Label for="username">Username</Label>
        <Input type="text" name="username" id="username" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Enter your username" required/>
      </FormGroup>
      <FormGroup>
        <Label for="password">Password</Label>
        <Input type="text" name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password" required/>
      </FormGroup>
      <FormGroup>
        <Label for="bio">Bio</Label>
        <Input type="text" name="bio" id="bio" value={bio} onChange={(e) => setBio(e.target.value)} placeholder="Enter your bio" required/>
      </FormGroup>
      <Button color="primary" type="submit">Sign up</Button>
    </Form>
  );
};

export default Signup;
