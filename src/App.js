import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';


import Login from "./page/Login/Login" ;
import Dashboard from "./page/Dashboard/Dashboard" ;
import DataSiswa from "./page/DataSiswa/DataSiswa";

export default function App() {
 
   
      return (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/dashboard" element={<Dashboard/>}/>
            <Route path="/datasiswa" element={<DataSiswa/>}/>
          </Routes>
        </BrowserRouter>
      );
     
 }