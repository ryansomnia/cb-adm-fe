import React,{useState} from 'react'
import { AiOutlineArrowLeft, AiOutlineDatabase, AiOutlineUser } from "react-icons/ai";
import { MdOutlineSchool } from "react-icons/md";
import { GrArticle } from "react-icons/gr";
import { Link } from "react-router-dom";
import TableArticle from '../Component/TableArticle';
import ModaTambahArtikel from '../Component/ModaTambahArtikel';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Swal from 'sweetalert2';

export default function DataArtikel() {
    const [open, setOpen] = useState(true);
    let navigate = useNavigate();

    const logOut =  () => {
      Swal.fire({
        title: 'Yakin ingin keluar ?',
        text: "",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes'
      }).then((result) => {
        if (result.isConfirmed) {
          
  
          Swal.fire(
            'Logout',
            'Kamu Berhasil Logout',
            'success'
          ).then(() => {
            localStorage.removeItem("user");
            navigate('/login')
          }
          )
  
          
        }
      })
      
    }

    useEffect(() => {
    
      if (localStorage.getItem('user') == null) {
        navigate('/login')
      }
    }, [])

  return (
    <div className="flex">
      <div
        className={`bg-green h-screen p-5 pt-8 ${
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
          <li className="text-white text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-white hover:text-black rounded-md mt-2" onClick={logOut}>
            <span>
              <AiOutlineUser className="hover:bg-white" />
            </span>

            <span
              className={`text-base font-medium flex-1 ${!open && "hidden"}`}
            >
              <p className="hover:text-black">Logout</p>
            </span>
          </li>
        </ul>
      </div>

      <div className="p-7">
        <h1 className="text-2xl font-semibold">Data Artikel</h1>
        <ModaTambahArtikel/>
        <TableArticle/>
        
      </div>
    </div>
  
  )
}
