import React, { useEffect, useState } from "react";
import axios from "axios";

export default function TableUser() {
  
  const [data, setData] = useState([]);

  useEffect(() => {
    const api = `http://localhost:3014/user/getAll`;
    
    const getData = async (e) => {
      try {
        let res = await axios.get(api);
        setData(res.data.data);
        console.log(data);
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
      {data.map((x, i) => 
            
            <tr key={i} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {x.iduser}
              </th>
              <td className="py-4 px-6">{x.username}</td>
              <td className="py-4 px-6">{x.password}</td>
              <td className="py-4 px-6">{x.nama}</td>
              <td className="py-4 px-6">{x.status}</td>
              <td className="py-4 px-6">{x.role}</td>

              <td className="py-4 px-6 text-right">
              <button className="font-medium pr-5 text-red-600 dark:text-red-500 hover:underline">
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
  )
}
