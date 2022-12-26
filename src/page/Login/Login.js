import React, { useState } from "react";
import axios from "axios";
import Swal from 'sweetalert2'
import { useNavigate } from "react-router-dom";

export default function Login() {
  
  const api = `http://89.116.228.164:3014/user/login`;

  const [username, setUsername] =useState("");
  const [password, setPassword] =useState("");

  const navigate = useNavigate(); 

  const saveUser = async(e) =>{
    e.preventDefault();
        try {
         let res =  await axios.post(api, {
            username,
            password
          });
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: `Selamat datang <br> ${res.data.data}`,
            showConfirmButton: false,
            timer: 1500
          })
          navigate("/dashboard")
        } catch (err) {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Anda memasukan Username atau Password yang salah !'
          })
          console.log('err',err.response.status);
        }
  }

  return (
    <div className="flex justify-center">
      {/* <div className="bg-green-400 w-1/2">
        <h1>hh</h1>
        </div>
        <div className="bg-red-400 w-1/2">
        <img src="/img/TK.JPG" alt='img'></img>
        </div> */}
      <div className="bg-white h-36 w-max">
        <p className="font-sans text-3xl">Login</p>
        <form onSubmit={saveUser}>
          <div className="flex flex-col">
            <label>Username</label>
            <input
              className=" h-8 w-max border-2 rounded "
              id="username"
              value={username}
              onChange={(e)=> setUsername(e.target.value)}
            ></input>
            <label>Password</label>
            <input
              className=" h-8 w-max border-2 rounded "
              value={password}
              onChange={(e)=> setPassword(e.target.value)}
              id="password"
              type="password"
            ></input>
            <button type="submit" className=" mt-5 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
