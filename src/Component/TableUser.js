import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ModalUpdateUser from "./ModalUpdateUser";
import { AiFillDelete, AiFillEdit, AiOutlineSearch } from "react-icons/ai";
import Pagination from "./Pagination";

export default function TableUser() {

  const [data, setData] = useState([]);
  const [dataOne, setDataOne] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(2);
  const [nama, setNama] = useState('')
  const navigate = useNavigate();
  const api = `http://89.116.228.164:3014/`;

  const getData = async (e) => {
    try {
      let res = await axios.get(api + 'user/getAll');
      setData(res.data.data);
    } catch (err) {
      console.log("err", err.response.status);
    }
  };

  useEffect(() => {
    getData();
  }, []);


  const deleteUser = async (id) => {
    try {
      await axios.post(api + 'user/deleteUser', { id });
      navigate("/datauser")
      window.location.reload();
    } catch (err) {
      console.log('err', err);
    }
  }

  const searchData = async () => {
    try {
      if (nama) {
        console.log(nama, 'nama');
        let hasil = await axios.post(api + 'user/searchByNama', { nama });
        setData(hasil.data)
      } else {
        getData();
      }

    } catch (err) {
      console.log("err", err);
    }
  }


  const getOneDataUser = async (id) => {
    try {
      let res = await axios.post(api + 'user/getOneData', { iduser: id });
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
    <>
      <div className="overflow-x-auto relative shadow-md sm:rounded-lg mt-10  text-gray-700">
        <ModalUpdateUser data={dataOne} />
        <div class="flex justify-start">
          <div class="flex flex-row mb-3 xl:w-96">

            <input
              type="text"
              onChange={(e) => setNama(e.target.value)}
              className="
              o
        form-control
        block
        
        text-base
        font-normal
        text-gray-700
         bg-clip-padding
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
              <AiOutlineSearch size={30} className='px-2 bg-blue-600' color='white' onClick={() => searchData()} />
            </button>

          </div>
        </div>
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="py-3 px-6">
                ID
              </th>
              <th scope="col" className="py-3 px-6">
                Username
              </th>
              <th scope="col" className="py-3 px-6">
                Password
              </th>
              <th scope="col" className="py-3 px-6">
                Nama
              </th>
              <th scope="col" className="py-3 px-6">
                Status
              </th>
              <th scope="col" className="py-3 px-6">
                Role
              </th>
              <th scope="col" className="py-3 px-6 text-center">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {currentPost.map((user) =>

              <tr key={user.iduser} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {user.iduser}
                </th>
                <td className="py-4 px-6">{user.username}</td>
                <td className="py-4 px-6">{user.password}</td>
                <td className="py-4 px-6">{user.nama}</td>
                <td className="py-4 px-6">{user.status}</td>
                <td className="py-4 px-6">{user.role}</td>

                <td className=" flex py-4 px-6 text-right">
                  <button
                    className="flex py-1 px-2 text-center self-center bg-red-500 text-white font-light text-xs leading-tight uppercase 
              rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg 
              focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out mr-2"
                    onClick={() => deleteUser(user.iduser)}>
                    <AiFillDelete size={30} /> Delete
                  </button>
                  <button
                    type="button" className="flex py-1 px-2 text-center self-center no-underline bg-blue-600 text-white font-light text-xs leading-tight uppercase 
      rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg 
      focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                    data-bs-toggle="modal"
                    data-bs-target="#updateUser"
                    onClick={() => getOneDataUser(user.iduser)}
                  >
                    <AiFillEdit size={30}
                    /> Update
                  </button>
                </td>
              </tr>
            )}
          </tbody>
        </table>
        <Pagination postPerPage={postsPerPage} totalPost={data.length} paginate={paginate}/>
      </div>
    </>
  )
}
