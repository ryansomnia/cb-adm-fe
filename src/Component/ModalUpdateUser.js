
import React, {useEffect, useState} from "react";
import axios from "axios";
// import Swal from 'sweetalert2'
import { useNavigate } from "react-router-dom";
import { AiFillEdit } from "react-icons/ai";


export default function ModalUpdateUser(id) {
  let iduser = id.id
  console.log('cccc=>',iduser);
    const api = `http://localhost:3014/user/getOneData`;

  const [username, setUsername] =useState("");
  const [password, setPassword] =useState("");
  const [nama, setNama] =useState("");
  const [role, setRole] =useState("");

  // const navigate = useNavigate(); 


  const getOneDataUser = async (ID) => {
    // e.preventDefault();
    try {
      let res = await axios.get(api,{iduser:ID});
      console.log('fff',res);
      setUsername(res.data.username)
      setPassword(res.data.password)
      setNama(res.data.nama)
      setRole(res.data.role)

    } catch (err) {
      console.log("err", err.response.status);
    }
  };
  
  useEffect(()=>{
    getOneDataUser();
  },[])

   // const updateUser = async(e) =>{
  //   e.preventDefault();
  //       try {
  //        let res =  await axios.post(api+'/updateUser', {
  //           username,
  //           password,
  //           nama,
  //           role
  //         });
  //         console.log(res);
  //         Swal.fire({
  //           position: 'top-end',
  //           icon: 'success',
  //           title: `Sukses mengedit data.`,
  //           showConfirmButton: false,
  //           timer: 1500
  //         })
  //         navigate("/datauser")
  //         window.location.reload();
  //       } catch (err) {
  //         Swal.fire({
  //           icon: 'error',
  //           title: 'Oops...',
  //           text: 'Anda gagal menambahkan data.'
  //         })
  //         console.log('err',err.response.status);
  //       }
  // }
  return (
    <div className="flex flex-row">
    <button
      type="button" className="flex py-1 px-2 text-center self-center no-underline bg-blue-600 text-white font-light text-xs leading-tight uppercase 
      rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg 
      focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
      data-bs-toggle="modal"
      data-bs-target="#updateUser"
      onClick={()=> getOneDataUser(iduser)}
      >
     <AiFillEdit size={30}
      /> Update
    </button>

    {/* <!-- Modal --> */}
    <div
      className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
      id="updateUser"
      tabindex="-1"
      aria-labelledby="updateUserLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog relative w-auto pointer-events-none">
        <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
          <div className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
            <h5
              className="text-xl font-medium leading-normal text-gray-800"
              id="updateUserLabel"
            >
              Edit Data
            </h5>
            <button
              type="button"
              className="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body relative p-4">
          <div className="block p-6 rounded-lg shadow-lg bg-white max-w-md">
<form 
// onSubmit={saveUser}
>
  <div className="grid grid-cols-2 gap-4">
    <div className="form-group mb-6">
      <input type="text" 
      // value={username}
      // onChange={(e)=> setUsername(e.target.value)}
      className="form-control block  w-full  px-3  py-1.5  text-base  font-normal  text-gray-700  bg-white bg-clip-padding  border border-solid border-gray-300 rounded transition ease-in-out m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" 
        aria-describedby="emailHelp123" placeholder="Username"/>
        
      
    </div>
    <div className="form-group mb-6">
    <input type="password" 
    //   value={password}
    //   onChange={(e)=> setPassword(e.target.value)}
      className="form-control block  w-full  px-3  py-1.5  text-base  font-normal  text-gray-700  bg-white bg-clip-padding  border border-solid border-gray-300 rounded transition ease-in-out m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" 
        aria-describedby="emailHelp123" placeholder="Password"/>
        
    </div>
  </div>
  <div className="grid grid-cols-2 gap-4">

  <div className="form-group mb-6">
    <input type="text" 
    //   value={nama}
    //   onChange={(e)=> setNama(e.target.value)}
      className="form-control block  w-full  px-3  py-1.5  text-base  font-normal  text-gray-700  bg-white bg-clip-padding  border border-solid border-gray-300 rounded transition ease-in-out m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" 
        aria-describedby="emailHelp123" placeholder="Nama Lengkap"/>
        
    </div>
    <div className="form-group mb-6">
<select className="form-control block  w-full  px-3  py-1.5  text-base  font-normal  text-gray-700  bg-white bg-clip-padding  border border-solid border-gray-300 rounded transition ease-in-out m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" 
        aria-describedby="emailHelp123" placeholder="Role"
            // onChange={(e)=> setRole(e.target.value)}
            // value={role}
        >
          <option selected>Role</option>
          <option value="Manager">Manager</option>
          <option value="Admin">Admin</option>
        </select>
        
      
    </div>
  </div>
 

  
  
  <button
              type="button"
              className="px-6
        py-2.5
        bg-purple-600
        text-white
        font-medium
        text-xs
        leading-tight
        uppercase
        rounded
        shadow-md
        hover:bg-purple-700 hover:shadow-lg
        focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0
        active:bg-purple-800 active:shadow-lg
        transition
        duration-150
        ease-in-out"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button
              type="submit"
              className="px-6
    py-2.5
    bg-blue-600
    text-white
    font-medium
    text-xs
    leading-tight
    uppercase
    rounded
    shadow-md
    hover:bg-blue-700 hover:shadow-lg
    focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
    active:bg-blue-800 active:shadow-lg
    transition
    duration-150
    ease-in-out
    ml-1">
              Save changes
            </button>
</form>
</div>
          </div>
          <div className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
        
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
