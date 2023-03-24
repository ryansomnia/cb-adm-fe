import React,{useState} from 'react'
import axios from "axios";
import Swal from 'sweetalert2'
import { useNavigate } from "react-router-dom";

// import {AiFillEye} from 'react-icons/ai'
const Login = () => {

    const api = `http://31.220.6.60:3014/user/login`;

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
          Toast.fire({
            icon: 'success',
            title: `Selamat datang <br> ${res.data.data}`
          })
          
          localStorage.setItem('user', res.data.data)
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

  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })
  
  return (
    <div className="flex h-screen bg-white">
    <div className="flex items-center w-1/2">
    <img src="login.png" alt="Girl in a jacket" className='w-auto h-screen'/>
    </div>
    <div className="flex items-center w-1/2 bg-blue-300 ">
    <div className=' w-2/3 h-2/3 m-auto '>
    <div className=' flex flex-col mt-20 w-auto'>
      <h1 className=' ml-7 font-sans font-bold mb-5 text-left text-5xl text-navy'>LOGIN DISINI !</h1>
      <p className=' ml-7 font-sans text-base text-left text-navy'> Selamat datang !<br/> silahkan isi username dan password anda</p>

    </div>
    <form onSubmit={saveUser}> 
        <div className='mt-5'>
    <div className='ml-7  mt-5'> 
    <p className='text-navy font-sans mb-2 text-xl '>Username</p>
  <input className=" h-10 w-3/4  placeholder:italic placeholder:text-slate-400 block bg-white border border-slate-300 rounded-md py-2 pl-5 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" 
  placeholder="Input Your Username ..." 
  id='username'
  value={username}
  onChange={(e)=> setUsername(e.target.value)}
  type="text" 
  name="username"
  />

    </div>
    <div className='ml-7  mt-5'> 
    <p className='text-navy font-sans mb-2 text-xl '>Password</p>

  <div className=' flex items-center'>
  <input className=" h-10 w-3/4 placeholder:italic placeholder:text-slate-400 block bg-white border border-slate-300 rounded-md py-2 pl-5 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" 
  placeholder="Input Your Password ..." 
  id='password'
  value={password}
  onChange={(e)=> setPassword(e.target.value)}
  type="password"
   name="password"/>
  {/* <AiFillEye className='  absolute '/> */}
  </div>
  

    </div>
    <div className='ml-7  mt-5'> 

  <div className=' flex items-center'>
  {/* <p className='mr-1'>Lupa Password ? </p>
  <a className='mr-5' href='#'> Klik disini</a> */}
  <button 
  className=" bg-green px-10 py-3 rounded-2xl text-white"
  type='submit'>
    Login
    </button> 
  </div>
  

    </div>
    </div>
    </form>
   
</div>

    </div>
  </div>
  )
}

export default Login