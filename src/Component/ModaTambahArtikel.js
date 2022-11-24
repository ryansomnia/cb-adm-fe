import React, { useState } from "react";
import axios from "axios";
import Swal from 'sweetalert2'
// import { useNavigate } from "react-router-dom";
import { AiFillFileAdd } from "react-icons/ai";


export default function ModalTambahArtikel() {
  const api = `http://localhost:3014/artikel/addArtikel`;
  const [judul, setJudul] =useState("");
  const [isi, setIsi] =useState("");
  const [img, setImg] =useState("");
  const [kategori, setKategori] =useState("");



  const onsubmit = async () => {
    console.log('judul', judul);
    console.log('isi', isi);
    console.log('img', img);
    console.log('kategori', kategori);


    const data = new FormData();

    data.append('judul', judul)
    data.append('isi', isi)
    data.append('img', img)
    data.append('kategori', kategori)

    axios.post(api, data, {
      headers: {
        'content-type' : 'multipart/form-data'
      }

    }).then(res =>{
      console.log('post success : ', res);
    })
    .catch(err =>{
      console.log('post gagal : ',err);
    })
  }
  
  
  //  const upload = async(e) =>{
  //   e.preventDefault();
  //       try {
  //       let res =  await axios.post(api, {
  //           method: "POST",
  //           body:JSON.stringify({judul, isi, img, kategori})
  //         });
  //         console.log(res);
  //         Swal.fire({
  //           position: 'top-end',
  //           icon: 'success',
  //           title: `Artikel berhasil ditambahkan. `,
  //           showConfirmButton: false,
  //           timer: 1500
  //         })
  //         // window.location.reload();
  //       } catch (err) {
  //         Swal.fire({
  //           icon: 'error',
  //           title: 'Oops...',
  //           text: 'Anda gagal menambah Artikel'
  //         })
  //         console.log('err',err.response.status);
  //       }
  // }

  return (
    // Button trigger modal
    <div className="flex flex-row">
      <button
        type="button" className="px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase 
        rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg 
        focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal">
       <AiFillFileAdd size={30} className="mb-5"/> Tambah Artikel
      </button>

      {/* <!-- Modal --> */}
      <div
        className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog relative w-auto pointer-events-none">
          <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
            <div className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
              <h5
                className="text-xl font-medium leading-normal text-gray-800"
                id="exampleModalLabel"
              >
                Tambah Data
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
  <form>
    <div className="grid grid-cols-2 gap-4">
      <div className="form-group mb-6">
        <input type="text" 
        value={judul}
        onChange={(e)=> setJudul(e.target.value)}
        className="form-control block  w-full  px-3  py-1.5  text-base  font-normal  text-gray-700  bg-white bg-clip-padding  border border-solid border-gray-300 rounded transition ease-in-out m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput123"
          aria-describedby="emailHelp123" placeholder="Judul Artikel"/>
      </div>
      <div className="form-group mb-6">
      <select 
         value={kategori}
         onChange={(e)=> setKategori(e.target.value)}
      className="form-select appearance-none
      block
      w-full
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding bg-no-repeat
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example">
        <option selected>Pilih Kategori</option>
        <option value="news">News</option>
        <option value="artikel">Artikel</option>
    </select>
      </div>
    </div>
    <div className="form-group mb-6">
    <textarea
       value={isi}
       onChange={(e)=> setIsi(e.target.value)}
      className="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
      id="exampleFormControlTextarea1"
      rows="3"
      placeholder="Isi Artikel"
    ></textarea>
    </div>
    <div className="form-group mb-6">
    <label for="formFile" className="form-label inline-block mb-2 text-gray-700">Input Gambar</label>
    <input 
       value={img}
       onChange={(e)=> setImg(e.target.value)}
    className="form-control
    block
    w-full
    px-3
    py-1.5
    text-base
    font-normal
    text-gray-700
    bg-white bg-clip-padding
    border border-solid border-gray-300
    rounded
    transition
    ease-in-out
    m-0
    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" type="file" accept="image/png, image/jpg, image/jpeg" id="formFile"/>
    </div>
    <div className="form-group form-check text-center mb-6">
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
      ml-1"
              onClick={onsubmit()}>
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
  );
}
