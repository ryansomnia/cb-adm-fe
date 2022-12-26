import React, { useEffect, useState } from "react";
import axios from "axios";
// import Swal from "sweetalert2";
import { AiFillDelete, AiOutlineSearch } from "react-icons/ai";

import { useNavigate } from "react-router-dom";

export default function TableSiswa() {
  
  const [data, setData] = useState([]);
  const navigate = useNavigate(); 
  const api = `http://89.116.228.164:3014/`;

  useEffect(() => {
    
    const getData = async (e) => {
      try {
        let res = await axios.get(api + 'register/getAll');
        setData(res.data);
        console.log(res.data);
      } catch (err) {
        console.log("err", err.response.status);
      }
    };

    getData();
  }, []);

  

  const deleteData = async (id) => {
    console.log(id);
    try {
      await axios.post(api+'register/deleteData',{idregister:id});
      navigate("/datasiswa")
      window.location.reload();
    } catch (err) {
      console.log("err", err);
    }
  };

  // const updateData = async (e) => {
  //   try {
  //     let res = await axios.post(api);
  //     setData(res.data);
  //     console.log(res.data);
  //   } catch (err) {
  //     console.log("err", err.response.status);
  //   }
  // };

  return (
    <div className="overflow-x-auto relative shadow-md sm:rounded-lg mt-10">
      <div class="flex justify-start">
  <div class="flex flex-row mb-3 xl:w-96">
  
    <input
      type="text"
      class="
        form-control
        block
        
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
      id="exampleFormControlInput1"
      placeholder="Cari Nama"
    />
    <button>
    <AiOutlineSearch size={30} className='px-2 bg-blue-600' color='white'/>
    </button>
    
  </div>
</div>
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
          <th scope="col" className="py-3 px-6">
            ID Reg
            </th>
            <th scope="col" className="py-3 px-6">
            Nama Lengkap
            </th>
            <th scope="col" className="py-3 px-6">
            Jenis Regis
            </th>
            <th scope="col" className="py-3 px-6">
              Tanggal Lahir
            </th>
            <th scope="col" className="py-3 px-6">
            Tempat Lahir
            </th>
            <th scope="col" className="py-3 px-6">
            Jenis Kelamin
            </th>
            <th scope="col" className="py-3 px-6">
            Status Registrasi
            </th>
            <th scope="col" className="py-3 px-6 text-center">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((register) => 
            
            <tr key={register.idregister} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              {register.idregister}
              </th>
              <td className="py-4 px-6">{register.namaLengkap}</td>
              <td className="py-4 px-6">{register.jenisRegis}</td>
              <td className="py-4 px-6">{register.tanggalLahir}</td>
              <td className="py-4 px-6">{register.tempatLahir}</td>
              <td className="py-4 px-6">{register.jenisKelamin}</td>
              <td className="py-4 px-6">{register.statusRegistrasi}</td>

              <td className="py-4 px-6 text-right">
              <button 
              className="font-medium pr-5 text-red-600 dark:text-red-500 hover:underline"
                  onClick={()=> deleteData(register.idregister)}>
                  Delete
                </button>
                <button className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                    Edit
                </button>
              </td>
            </tr>
        )}
        </tbody>
      </table>
    </div>
  );
}
