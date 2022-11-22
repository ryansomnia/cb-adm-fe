import React, { useEffect, useState } from "react";
import axios from "axios";
// import Swal from "sweetalert2";
// import { useNavigate } from "react-router-dom";

export default function TableArticle() {

    const [data, setData] = useState([]);

    useEffect(() => {
        const api = `http://8.215.37.21:3014/artikel/getAll`;

        const getData = async (e) => {
            try {
              let res = await axios.get(api);
              setData(res.data);
              console.log(res.data);
            } catch (err) {
              console.log("err", err.response.status);
            }
          };

        getData();
      }, []);
    
     
  
    return (
    <div className="overflow-x-auto relative shadow-md sm:rounded-lg mt-10">
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="py-3 px-6">
                    ID
                </th>
                <th scope="col" className="py-3 px-6">
                    Judul
                </th>
                <th scope="col" className="py-3 px-6">
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
            {data.map((x, i) =>

           
            <tr key={i}className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {x.idartikel}
                </th>
                <td className="py-4 px-6">
                {x.judul}
                </td>
                <td className="py-4 px-6">
                    {x.isi}
                </td>
                <td className="py-4 px-6">
                    {x.img}
                </td>
                <td className="py-4 px-6">
                    {x.kategori}
                </td>
                <td className="py-4 px-6">
                    {x.tglCreate}
                </td>
                <td className="py-4 px-6">
                    {x.status}
                </td>
                <td className="py-4 px-6 text-right">
                <button className="font-medium pr-5 text-red-600 dark:text-red-500 hover:underline">
                  Delete
                </button>
                <button className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                    Edit
                </button>                </td>
            </tr>
            )}
        </tbody>
    </table>
</div>
  )
}
