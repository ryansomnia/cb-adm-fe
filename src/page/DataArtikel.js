import React,{useState} from 'react'
import { AiOutlineArrowLeft, AiOutlineDatabase } from "react-icons/ai";
import { MdOutlineSchool } from "react-icons/md";
import { GrArticle } from "react-icons/gr";
import { Link } from "react-router-dom";

export default function DataArtikel() {
    const [open, setOpen] = useState(true);

  return (
    <div className="flex">
      <div
        className={`bg-green-900 h-screen p-5 pt-8 ${
          open ? "w-72" : "w-20"
        } duration-300 relative`}
      >
        <AiOutlineArrowLeft
          className={`bg-white text-black text-3xl
    rounded-full absolute -right-3 top-9 border border-dark-purple cursor-pointer ${
      !open && "rotate-180"
    }`}
          onClick={() => setOpen(!open)}
        />
        <Link to="/dashboard">
          <div className="inline-flex">
            <AiOutlineDatabase
              className={`bg-white text-4xl rounded 
    cursor-pointer block float-left mr-2 duration-500 
    ${open && "rotate-[360deg]"}`}
            />
            <h1
              className={`text-white origin-left font-medium text-2xl duration-300 ${
                !open && "scale-0"
              }`}
            >
              Dashboard
            </h1>
          </div>
        </Link>
        <ul className="pt-2">
          <Link to="/datasiswa">
          <li className=" text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-white text-white rounded-md mt-2">
            <span className="hover:text-black">
              <MdOutlineSchool className="hover:bg-white" />
            </span>
            <span
              className={`text-base font-medium flex-1  ${!open && "hidden"}`}
            >
              <p className="hover:text-black"> Data Siswa</p>
            </span>
          </li>
          </Link>
          <Link to="/dataartikel">
          <li className="text-black text-sm flex items-center gap-x-4 cursor-pointer p-2 bg-white hover:bg-white hover:text-black rounded-md mt-2">
            <span>
              <GrArticle className="bg-white" />
            </span>
            <span
              className={`text-base font-medium flex-1 ${!open && "hidden"}`}
            >
              <p className="hover:text-black">Data Artikel</p>
            </span>
          </li>
          </Link>
          <Link to="/datauser">
          <li className="text-white text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-white hover:text-black rounded-md mt-2">
            <span>
              <MdOutlineSchool className="hover:bg-white" />
            </span>

            <span
              className={`text-base font-medium flex-1 ${!open && "hidden"}`}
            >
              <p className="hover:text-black">Data User</p>
            </span>
          </li>
          </Link>
        </ul>
      </div>

      <div className="p-7">
        <h1 className="text-2xl font-semibold">Data Artikel</h1>
        <div className="overflow-x-auto relative shadow-md sm:rounded-lg mt-10">
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="py-3 px-6">
                    Judul Artikel
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
                    <span className="sr-only">Edit</span>
                </th>
            </tr>
        </thead>
        <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Apple MacBook Pro 17"
                </th>
                <td className="py-4 px-6">
                    Sliver
                </td>
                <td className="py-4 px-6">
                    Sliver
                </td>
                <td className="py-4 px-6">
                    Laptop
                </td>
                <td className="py-4 px-6">
                    $2999
                </td>
                <td className="py-4 px-6 text-right">
                    <a className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Microsoft Surface Pro
                </th>
                <td className="py-4 px-6">
                    Sliver
                </td>
                <td className="py-4 px-6">
                    White
                </td>
                <td className="py-4 px-6">
                    Laptop PC
                </td>
                <td className="py-4 px-6">
                    $1999
                </td>
                <td className="py-4 px-6 text-right">
                    <a className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
            </tr>
            <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Magic Mouse 2
                </th>
                <td className="py-4 px-6">
                    Sliver
                </td>
                <td className="py-4 px-6">
                    Black
                </td>
                <td className="py-4 px-6">
                    Accessories
                </td>
                <td className="py-4 px-6">
                    $99
                </td>
                <td className="py-4 px-6 text-right">
                    <a className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                    <a className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Delete</a>
                </td>
            </tr>
        </tbody>
    </table>
</div>
      </div>
    </div>
  
  )
}
