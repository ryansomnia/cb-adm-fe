import React, { useEffect, useState } from "react";
import axios from "axios";
// import Swal from "sweetalert2";
import moment from 'moment';
import { AiFillDelete, AiFillEdit, AiOutlineSearch } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import ModalTambahArtikel from "./ModaTambahArtikel";
import ModalUpdateArtikel from "./ModalUpdateArtikel";
import Pagination from "./Pagination";

export default function TableArticle() {

    const [data, setData] = useState([]);
    const [dataOne, setDataOne] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [judul, setJudul] = useState('')
    const [postsPerPage] = useState(5);
    const navigate = useNavigate();
    const api = `http://89.116.228.164:3014/`;


    const getData = async (e) => {
        try {
            let res = await axios.get(api + 'artikel/getAll');
            setData(res.data);
            console.log(res.data);
        } catch (err) {
            console.log("err", err.response.status);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    const deleteArtikel = async (id) => {
        try {
            await axios.post(api + 'artikel/deleteArtikel', { id });

            navigate("/dataartikel")
            window.location.reload();
        } catch (err) {
            console.log('err', err);
        }
    }

    const searchData = async () => {
        try {
          if (judul) {
            console.log(judul);
            let hasil = await axios.post(api + 'artikel/searchByJudul', { judul});
            setData(hasil.data)
          } else {
            getData();
          }
    
        } catch (err) {
          console.log("err", err);
        }
      }


    const getOneDataArtikel = async (id) => {
        try {
            let res = await axios.post(api + 'artikel/getOneArtikel', { id });
            setDataOne(res.data);
            console.log(res.data, 'GET ONE');
        } catch (err) {
            console.log("err", err.response.status);
        }
    }
    const paginate = (pageNumber) => setCurrentPage(pageNumber)

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPost = data.slice(indexOfFirstPost, indexOfLastPost)

    return (
        <div className="overflow-x-auto relative shadow-md sm:rounded-lg mt-5">
            <div className="flex justify-start">
                <div className="flex flex-row mb-3 xl:w-96">
                    <ModalUpdateArtikel data={dataOne[0]} />
                    <input
                        onChange={(e) => setJudul(e.target.value)}
                        type="text"
                        className="form-control block text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        id="exampleFormControlInput1"
                        placeholder="Cari Nama"
                    />
                    <button>
                        <AiOutlineSearch size={30} className='px-2 bg-blue-600' color='white' onClick={() => searchData()}/>
                    </button>

                </div>
            </div>
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-white text-center uppercase bg-navy dark:bg-navy dark:text-gray-400">
                    <tr>
                        <th scope="col" className="py-3 px-6">
                            ID
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Judul
                        </th>
                        <th scope="col" className="py-2 px-4">
                            Isi Artikel
                        </th>
                        
                        <th scope="col" className="py-3 px-6">
                            Image
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Kategori
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Tanggal Dibuat
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Status
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {currentPost.map((artikel) =>
                        <tr key={artikel.idartikel} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {artikel.idartikel}
                            </th>
                            <td className="py-4 px-6">
                                {artikel.judul}
                            </td>
                            <td className="py-4 px-6">
                                {artikel.isi}
                            </td>
                         
                            <td className="py-4 px-6" >
                                <img src={artikel.url} alt='img'></img>
                            </td>
                            <td className="py-4 px-6">
                                {artikel.kategori}
                            </td>
                            <td className="py-4 px-6">
                                {moment(artikel.tglCreate).format('DD-MM-yy')}
                            </td>
                            <td className="py-4 px-6">
                                {artikel.status}
                            </td>
                            <td className="py-4 px-6 text-right">
                                <button
                                    className="flex py-1 px-2 text-center self-center bg-red text-white font-light text-xs leading-tight uppercase 
              rounded shadow-md hover:bg-red-dark hover:shadow-lg focus:bg-red-dark focus:shadow-lg 
              focus:outline-none focus:ring-0 active:bg-red-dark active:shadow-lg transition duration-150 ease-in-out mr-2"
                                    onClick={() => deleteArtikel(artikel.idartikel)}>
                                    <AiFillDelete size={30} /> Delete
                                </button>
                                {/* <button
                                    type="button" className="flex py-1 px-2 text-center self-center no-underline bg-blue-600 text-white font-light text-xs leading-tight uppercase 
      rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg 
      focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                                    data-bs-toggle="modal"
                                    data-bs-target="#modalartikelUpdate"
                                    onClick={() => getOneDataArtikel(artikel.idartikel)}
                                >
                                    <AiFillEdit size={30}
                                    /> Update
                                </button> */}
                            </td>
                        </tr>
                    )}
                    <Pagination postPerPage={postsPerPage} totalPost={data.length} paginate={paginate} />
                </tbody>
            </table>
        </div>
    )
}
