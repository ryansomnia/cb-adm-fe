import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function TableUser() {
  
  const [data, setData] = useState([]);
  const navigate = useNavigate(); 
  const api = `http://localhost:3014/`;

 
  useEffect(() => {
    const getData = async (e) => {
      try {
        let res = await axios.get(api+'user/getAll');
        setData(res.data.data);
      } catch (err) {
        console.log("err", err.response.status);
      }
    };
    
    getData();
  }, []);

 
  const deleteUser = async(id) =>{
        try {
         await axios.post(api+'user/deleteUser' , {id});
         navigate("/datauser")
         window.location.reload();
        } catch (err) {
          console.log('err',err);
        }
  }

  return (
    <>
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
      {data.map((user) => 
           
            <tr key={user.iduser} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              {user.iduser}
              </th>
              <td className="py-4 px-6">{user.username}</td>
              <td className="py-4 px-6">{user.password}</td>
              <td className="py-4 px-6">{user.nama}</td>
              <td className="py-4 px-6">{user.status}</td>
              <td className="py-4 px-6">{user.role}</td>

              <td className="py-4 px-6 text-right">
              <button 
              className="font-medium pr-5 text-red-600 dark:text-red-500 hover:underline"
              onClick={()=> deleteUser(user.iduser)}>
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
  </>
  )
}
