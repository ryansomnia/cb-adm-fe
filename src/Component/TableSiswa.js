import React, { useEffect, useState } from "react";
import axios from "axios";
// import Swal from "sweetalert2";
import { AiFillDelete, AiOutlineSearch } from "react-icons/ai";

import { useNavigate } from "react-router-dom";
import Pagination from "./Pagination";

export default function TableSiswa() {

  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [nama, setNama] = useState('')
  const [postsPerPage] = useState(5);
  const navigate = useNavigate();
  const api = `http://89.116.228.164:3014/`;


  const getData = async (e) => {
    try {
      let res = await axios.get(api + 'register/getAll');
      setData(res.data);
      console.log(res.data);
    } catch (err) {
      console.log("err", err.response.status);
    }
  };

  useEffect(() => {
    getData();
  }, []);



  const deleteData = async (id) => {
    console.log(id);
    try {
      await axios.post(api + 'register/deleteData', { idregister: id });
      navigate("/datasiswa")
      window.location.reload();
    } catch (err) {
      console.log("err", err);
    }
  };


  const searchData = async () => {
    try {
      if (nama) {
        console.log(nama);
        let hasil = await axios.post(api + 'register/searchByNama', { namaLengkap: nama });
        setData(hasil.data)
      } else {
        getData();
      }

    } catch (err) {
      console.log("err", err);
    }
  }

  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPost = data.slice(indexOfFirstPost, indexOfLastPost)

  return (
    <div className="overflow-x-auto relative shadow-md sm:rounded-lg mt-10">
      <div class="flex justify-start">
        <div class="flex flex-row mb-3 xl:w-96">

          <input
            onChange={(e) => setNama(e.target.value)}
            type="text"
            class="
        form-control
        block
        
        text-base
        font-normal
        text-black
        bg-white bg-clip-padding
        border border-solid border-black
        rounded
        transition
        ease-in-out
        m-0
        focus:text-black focus:bg-white focus:border-navy focus:outline-none
      "
            id="exampleFormControlInput1"
            placeholder="Cari Nama"
          />
          <button>
            <AiOutlineSearch size={30} className='px-2 bg-navy rounded-r' color='white' onClick={() => searchData()}/>
          </button>

        </div>
      </div>
      <table className=" border-collapse border bg-white mt-5 w-full text-sm text-left text-black dark:text-black">
        <thead className="text-xs text-black uppercase dark:bg-navy dark:text-white">
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
          {currentPost.map((register) =>

            <tr key={register.idregister} className="bg-white border-b dark:bg-gray dark:border-gray hover:bg-black hover:text-white dark:hover:bg-navy">
              <th scope="row" className="py-4 px-6 font-medium text-black hover:text-white whitespace-nowrap  dark:hover:text-white">
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
                  className="font-medium pr-5 text-red-600 dark:text-red hover:underline"
                  onClick={() => deleteData(register.idregister)}>
                  Delete
                </button>
                <button className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                  Edit
                </button>
              </td>
            </tr>
          )}
          <Pagination postPerPage={postsPerPage} totalPost={data.length} indexOfLastPost={indexOfLastPost} paginate={paginate} />
        </tbody>
      </table>
    </div>
  );
}
