import React, { useEffect, useState } from "react";
import axios from "axios";
// import Swal from "sweetalert2";
import { AiFillDelete, AiFillEdit, AiOutlineSearch } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import ModalTambahArtikel from "./ModaTambahArtikel";
import ModalUpdateArtikel from "./ModalUpdateArtikel";

export default function TableArticle() {

    const [data, setData] = useState([]);
    const navigate = useNavigate();
    const api = `http://8.215.37.21:3014/`;


    useEffect(() => {
        const getData = async (e) => {
            try {
                let res = await axios.get(api + 'artikel/getAll');
                setData(res.data);
                console.log(res.data);
            } catch (err) {
                console.log("err", err.response.status);
            }
        };

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


    const getOneDataArtikel = async (id) => {
            try {
                let res = await axios.get(api + 'artikel/getAll');
                setData(res.data);
                console.log(res.data);
            } catch (err) {
                console.log("err", err.response.status);
            }
    }

    return (
        <div className="overflow-x-auto relative shadow-md sm:rounded-lg mt-5">
            <div className="flex justify-start">
                <div className="flex flex-row mb-3 xl:w-96">
                    <ModalUpdateArtikel />
                    <input
                        type="text"
                        className="form-control block text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        id="exampleFormControlInput1"
                        placeholder="Cari Nama"
                    />
                    <button>
                        <AiOutlineSearch size={30} className='px-2 bg-blue-600' color='white' />
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
                            Judul
                        </th>
                        <th scope="col" className="py-2 px-4">
                            Isi Artikel
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Image
                        </th>
                        <th scope="col" className="py-3 px-6">
                            URL
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
                    {data.map((artikel) =>
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
                            <td className="py-4 px-6">
                                {artikel.img}
                            </td>
                            <td className="py-4 px-6" >
                                <img src={artikel.url} alt='img'></img>
                            </td>
                            <td className="py-4 px-6">
                                {artikel.kategori}
                            </td>
                            <td className="py-4 px-6">
                                {artikel.tglCreate}
                            </td>
                            <td className="py-4 px-6">
                                {artikel.status}
                            </td>
                            <td className="py-4 px-6 text-right">
                                <button
                                    className="flex py-1 px-2 text-center self-center bg-red-500 text-white font-light text-xs leading-tight uppercase 
              rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg 
              focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out mr-2"
                                    onClick={() => deleteArtikel(artikel.idartikel)}>
                                    <AiFillDelete size={30} /> Delete
                                </button>
                                <button
                                    type="button" className="flex py-1 px-2 text-center self-center no-underline bg-blue-600 text-white font-light text-xs leading-tight uppercase 
      rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg 
      focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                                    data-bs-toggle="modal"
                                    data-bs-target="#modalartikel"
                                onClick={() => getOneDataArtikel(artikel.idartikel)}
                                >
                                    <AiFillEdit size={30}
                                    /> Update
                                </button>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}
