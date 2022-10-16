import React from "react";
import { AiFillAppstore } from "react-icons/ai";
import { IoSchoolOutline } from "react-icons/io5";

export default function Sidebar() {
  return (
    <nav className="px-5 bg-white border-r border-r-gray-300 h-screen">
      <div className="bg-indigo-500 w-10 h-10 rounded-3xl flex items-center justify-center mt-6">
        <AiFillAppstore size={30} color="white" />
      </div>
      <ul className="flex flex-col justify-center items-center mt-28">
        <li className="py-6">{<IoSchoolOutline size={30}/>}</li>
        <li className="py-6">{<IoSchoolOutline size={30}/>}</li>
        <li className="py-6">{<IoSchoolOutline size={30}/>}</li>
        <li className="py-6">{<IoSchoolOutline size={30}/>}</li>
        <li className="py-6">{<IoSchoolOutline size={30}/>}</li>
      </ul>
    </nav>
  );
}
