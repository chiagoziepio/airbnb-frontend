import React from 'react';
import './App.css'
import { Routes ,Route } from "react-router-dom";
import Layout from './componentJsx/Layout';
import Login from "./componentJsx/Login";
import Register from "./componentJsx/Register";
import Home from "./componentJsx/Home";
import Airbnbs from "./componentJsx/Airbnbs";
import MissingRoute from "./componentJsx/MissingRoutes"
function App() {
  

  return (
    <>
      <Routes>
        <Route path='/' element= {<Layout/>}>

          <Route index element = {<Home/>}/>
          <Route path='/airbnbs' element = {<Airbnbs/>}/>
          < Route path = '/login' element = {<Login/>}/>
          <Route path = '/register' element = {<Register/>}/>
          < Route path = "*" element = {<MissingRoute/>}/>
        
        </Route>
      </Routes>
    </>
  )
}

export default App
