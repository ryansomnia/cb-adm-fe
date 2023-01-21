import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AiFillEdit } from "react-icons/ai";
import Swal from "sweetalert2";
export default function ModalUpdateSiswa({ data }) {
    const api = `http://89.116.228.164:3014`;

    const navigate = useNavigate();

    const [namaLengkap, setNamaLengkap] = useState("");
    const [jenisRegis, setJenisRegis] = useState("");
    const [jenisKelamin, setJenisKelamin] = useState("");
    const [tanggalLahir, setTanggalLahir] = useState("");
    const [tempatLahir, setTempatLahir] = useState("");
    const [agama, setAgama] = useState("");
    const [noHp, setNoHp] = useState("");
    const [asalSekolah, setAsalSekolah] = useState("");
    const [alamat, setAlamat] = useState("");

  
    const updateSiswa = async(e) =>{
        e.preventDefault();
            try {
              if (!namaLengkap || !jenisKelamin || !jenisRegis || !tanggalLahir || !tempatLahir 
                || !agama || !noHp || !asalSekolah || !alamat) {
                Swal.fire({
                  position: 'top-end-center',
                  icon: 'error',
                  title: `Data belum lenglap terisi`,
                  showConfirmButton: false,
                  timer: 1500
                })
              }else{
                let res =  await axios.post(api+'/register/updateData', {
                  id: data.iduser,
                  username,
                  password,
                  nama,
                  role
                });
                console.log(res);
                Swal.fire({
                  position: 'top-end-center',
                  icon: 'success',
                  title: `Sukses mengedit data.`,
                  showConfirmButton: false,
                  timer: 1500
                })
                navigate("/datasiswa")
                window.location.reload();
              }
            } catch (err) {
              Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Anda gagal menambahkan data.'
              })
              console.log('err',err.response.status);
            }
      }
    
      useEffect(() => {
        setUsername(data.username)
        setPassword(data.password)
        setNama(data.nama)
        setRole(data.role)
      }, [data])

  return (
    <div className="flex flex-row">
      {/* <!-- Modal --> */}
      <div
        className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
        id="updateRegister"
        tabindex="-1"
        aria-labelledby="updateRegisterLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog relative w-auto pointer-events-none">
          <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
            <div className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
              <h5
                className="text-xl font-medium leading-normal text-gray-800"
                id="updateRegisterLabel"
              >
                Edit Data
              </h5>
              <button
                type="button"
                className="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body relative p-4">
              <div className="block p-6 rounded-lg shadow-lg bg-white max-w-md">
                <form
                onSubmit={updateSiswa}
                >
                  <div className="grid grid-cols-2 gap-4">
                    <div className="form-group mb-6">
                      <input type="text"
                        value={username}
                        // onChange={(e)=> setUsername(e.target.value)}
                        className="form-control block  w-full  px-3  py-1.5  text-base  font-normal  text-gray-700  bg-white bg-clip-padding  border border-solid border-gray-300 rounded transition ease-in-out m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        aria-describedby="emailHelp123" placeholder="Username" />


                    </div>
                    <div className="form-group mb-6">
                      <input type="password"
                          value={password}
                        //   onChange={(e)=> setPassword(e.target.value)}
                        className="form-control block  w-full  px-3  py-1.5  text-base  font-normal  text-gray-700  bg-white bg-clip-padding  border border-solid border-gray-300 rounded transition ease-in-out m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        aria-describedby="emailHelp123" placeholder="Password" />

                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">

                    <div className="form-group mb-6">
                      <input type="text"
                        value={nama}
                        //   onChange={(e)=> setNama(e.target.value)}
                        className="form-control block  w-full  px-3  py-1.5  text-base  font-normal  text-gray-700  bg-white bg-clip-padding  border border-solid border-gray-300 rounded transition ease-in-out m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        aria-describedby="emailHelp123" placeholder="Nama Lengkap" />

                    </div>
                    <div className="form-group mb-6">
                      <select className="form-control block  w-full  px-3  py-1.5  text-base  font-normal  text-gray-700  bg-white bg-clip-padding  border border-solid border-gray-300 rounded transition ease-in-out m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        aria-describedby="emailHelp123" placeholder="Role"
                        // onChange={(e)=> setRole(e.target.value)}
                        value={role}
                      >
                        <option defaultValue='Admin'>Role</option>
                        <option value="Manager">Manager</option>
                        <option value="Admin">Admin</option>
                      </select>


                    </div>
                  </div>




                  <button
                    type="button"
                    className="px-6
        py-2.5
        bg-purple-600
        text-white
        font-medium
        text-xs
        leading-tight
        uppercase
        rounded
        shadow-md
        hover:bg-purple-700 hover:shadow-lg
        focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0
        active:bg-purple-800 active:shadow-lg
        transition
        duration-150
        ease-in-out"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button
                    type="submit"
                    className="px-6
    py-2.5
    bg-blue-600
    text-white
    font-medium
    text-xs
    leading-tight
    uppercase
    rounded
    shadow-md
    hover:bg-blue-700 hover:shadow-lg
    focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
    active:bg-blue-800 active:shadow-lg
    transition
    duration-150
    ease-in-out
    ml-1">
                    Save changes
                  </button>
                </form>
              </div>
            </div>
            <div className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

