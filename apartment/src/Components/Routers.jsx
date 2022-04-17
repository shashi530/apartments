import React from 'react';
import { Routes, Route} from "react-router-dom";
import Home from "./Home"
import NavBar from './NavBar';
import { Login } from './Login'

export default function Routers() {
  return (
    <div>
      <NavBar />
      <Routes> 
          <Route path='/' element={<Home/>} />
          <Route path='/login' element={<Login/>} />
      </Routes>
    </div>
  )
}
