import Home from "./home"
import Nav from './navbar';
import { useLocation, BrowserRouter, Routes, Route } from "react-router-dom";
import Api from './api'
import About from './about'
import Inventory from './inventory'
import Signup from './signup'
import Login from './login'
import AllUsers from './allusers'
import React, { useEffect, useState } from 'react'


// Creating a function to connect routes to navigation bar
function App() {
  return (
    <div>
     <>
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" exact element = {<Home/>}/>
        <Route path="/api" exact element = {<Api/>}/>    
        <Route path="/about" exact element = {<About/>}/>       
        <Route path="/inventory" exact element = {<Inventory/>}/>  
        <Route path="/signup" exact element = {<Signup/>}/>       
        <Route path="/login" exact element = {<Login/>}/>       
        <Route path="/allusers" exact element = {<AllUsers/>}/>       


      </Routes>
    </BrowserRouter></>
    </div>
  )
}


export default App