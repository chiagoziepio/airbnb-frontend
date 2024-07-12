import React from 'react';
import './App.css'
import { Routes ,Route } from "react-router-dom";
import Layout from './componentJsx/Layout';
import Login from "./componentJsx/Login";
import Register from "./componentJsx/Register";
import Home from "./componentJsx/Home";
import Airbnbs from "./componentJsx/Airbnbs";
import ViewApartment from './componentJsx/ViewApartment';
import MissingRoute from "./componentJsx/MissingRoutes"
import ContextProvier from './context';
import Dasboard from './componentJsx/Dasboard';
import ListApartment from './componentJsx/ListApartment';
function App() {
  

  return (
    <ContextProvier>
      <Routes>
        <Route path='/' element= {<Layout/>}>

          <Route index element = {<Home/>}/>
          <Route path='/airbnbs' element = {<Airbnbs/>}/>
          < Route path = '/login' element = {<Login/>}/>
          <Route path = '/register' element = {<Register/>}/>
          <Route path='/viewapartment/:id' element={<ViewApartment/>}/>
          <Route path ="/dashboard" element = {<Dasboard/>}/>
          <Route path = "/listapartment" element ={<ListApartment/>}/>
          < Route path = "*" element = {<MissingRoute/>}/>
        
        </Route>
      </Routes>
    </ContextProvier>
  )
}

export default App
