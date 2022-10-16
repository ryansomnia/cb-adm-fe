import React, { useState } from "react";
// import Sidebar from '../../Component/Sidebar'
// import SubSidebar from '../../Component/SubSidebar'
import { AiOutlineArrowLeft, AiOutlineDatabase } from "react-icons/ai";
import { IoSchoolOutline } from "react-icons/io5";
import { GrArticle } from "react-icons/gr";

export default function Dashboard() {
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
        <ul className="pt-2">
          <li className="text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-ligth-white rounded-md mt-2">
            <span>
              <IoSchoolOutline className="text-white" />
            </span>
            <span className={`text-base font-medium flex-1 ${!open && "hidden"}` }>Data Siswa</span>
          </li>
          <li className="text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-ligth-white rounded-md mt-2">
            <span>
              <GrArticle className="bg-white" />
            </span>
            <span className={`text-base font-medium flex-1 ${!open && "hidden"}` }>Data Artikel</span>
          </li>
          <li className="text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-ligth-white rounded-md mt-2">
            <span>
              <IoSchoolOutline className="text-white" />
            </span>

            <span className={`text-base font-medium flex-1 ${!open && "hidden"}` }>Data User</span>
          </li>
        </ul>
      </div>

      <div className="p-7">
        <h1 className="text-2xl font-semibold">Home Page</h1>
      </div>
    </div>
  );
}
