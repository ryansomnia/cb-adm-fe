import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';


import Login from "./page/Login/Login" ;
import Dashboard from "./page/Dashboard/Dashboard" ;

export default function App() {
 
   
      return (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Dashboard />}/>
            <Route path="/login" component={Login}/>
            <Route path="/dashboard" component={Dashboard}/>
          </Routes>
        </BrowserRouter>
      );
     
 }