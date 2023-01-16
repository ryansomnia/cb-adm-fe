import React, { useEffect, useState } from "react";
import axios from "axios";
// import Swal from "sweetalert2";
import moment from 'moment';
import { AiFillDelete,AiFillEdit, AiOutlineSearch } from "react-icons/ai";
import ModalUpdateSiswa from "./ModalUpdateSiswa";
import { useNavigate } from "react-router-dom";
import Pagination from "./Pagination";

export default function TableSiswa() {

  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [dataOne, setDataOne] = useState([]);
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

  const getOneDataRegister = async (id) => {
    try {
      let res = await axios.post(api + 'register/getOneData', { idregister: id });
      console.log('reeeee',res);
      setDataOne(res.data.data[0])
    } catch (err) {
      console.log("err", err.response.status);
    }
  };

  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPost = data.slice(indexOfFirstPost, indexOfLastPost)

  return (
    <div className="overflow-x-auto relative shadow-md sm:rounded-lg mt-10">
      <ModalUpdateSiswa data={dataOne} />
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

            <tr key={register.idregister} className="bg-white border-b dark:bg-gray dark:border-gray">
              <th scope="row" className="py-4 px-6 bg-white font-medium text-black hover:text-white whitespace-nowrap  dark:hover:text-white">
                {register.idregister}
              </th>
              <td className="py-4 px-6 bg-white text-center">{register.namaLengkap}</td>
              <td className="py-4 px-6 bg-white text-center">{register.jenisRegis}</td>
              <td className="py-4 px-6 bg-white text-center">{moment(register.tanggalLahir).format('DD-MM-yy')}</td>
              <td className="py-4 px-6 bg-white text-center">{register.tempatLahir}</td>
              <td className="py-4 px-6 bg-white text-center">{register.jenisKelamin}</td>
              <td className="py-4 px-6 bg-white text-center">{register.statusRegistrasi}</td>

              <td className="flex py-4 px-6 text-right bg-white">
                <button
                    className="flex py-1 px-2 text-center self-center bg-red text-white font-light text-xs leading-tight uppercase 
              rounded shadow-md hover:bg-red-dark hover:shadow-lg focus:bg-red-dark focus:shadow-lg 
              focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out mr-2"
                    onClick={() => deleteData(register.idregister)}>
                    <AiFillDelete size={30} /> Delete
                  </button>
                  <button
                    type="button" className="flex py-1 px-2 text-center self-center no-underline bg-blue-dark text-white font-light text-xs leading-tight uppercase 
      rounded shadow-md hover:bg-blue hover:shadow-lg focus:bg-blue focus:shadow-lg 
      focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                    data-bs-toggle="modal"
                    data-bs-target="#updateRegister"
                    onClick={() => getOneDataRegister(register.idregister)}
                  >
                    <AiFillEdit size={30}
                    /> Update
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
