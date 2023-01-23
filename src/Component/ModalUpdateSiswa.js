import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AiFillEdit } from "react-icons/ai";
import Swal from "sweetalert2";
export default function ModalUpdateSiswa({ data }) {
  const api = `http://89.116.228.164:3014`;

  const navigate = useNavigate();

  const [dataSiswa, setDataSiswa] = useState([]);

  const HandleMassage = (massage) => {
    Swal.fire({
      position: "top-end-center",
      icon: "error",
      title: massage,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  const updateSiswa = async (e) => {
    e.preventDefault();
    try {
      axios.post('http://89.116.228.164:3014/register/updateData', dataSiswa)
        .then(function (response) {
          console.log(response);
          HandleMassage("Sukses mengedit data.");
          navigate("/datasiswa");
          window.location.reload();
        })
    } catch (err) {
      HandleMassage(err);
      console.log("err", err);
    }
  };


  const handleOnChange = (value, key) => {
    console.log(value, key);
    setDataSiswa(prevState => ({
      ...prevState,
      [key]: value
    }));
  }

  const dataData = (dataCon) => {
    let temp = dataCon

    console.log(temp, 'gege');
    if (temp) {
      setDataSiswa(temp)

      console.log(dataSiswa);
    } else {
      // 👇️ this runs
      console.log('⛔️ Object is falsy');
    }
  }

  useEffect(() => {
    dataData(data[0])
  }, [data])


  return (
    <div className="flex flex-row">
      {/* <!-- Modal --> */}
      <div
        className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
        id="modalsiswa"
        tabindex="-1"
        aria-labelledby="modalsiswaLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog relative w-auto pointer-events-none">
          <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
            <div className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
              <h5
                className="text-xl font-medium leading-normal text-gray-800"
                id="modalsiswa"
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
                <form onSubmit={updateSiswa}>
                  <div className="grid grid-cols-2 gap-4">

                    {Object.keys(dataSiswa).map(key => {
                      return (<div className="form-group mb-6" key={key}>
                        <p>{key}</p>
                        <input
                          type="text"
                          value={dataSiswa[key]}
                          onChange={(e) => handleOnChange(e.target.value, key)}
                          className="form-control block  w-full  px-3  py-1.5  text-base  font-normal  text-gray-700  bg-white bg-clip-padding  border border-solid border-gray-300 rounded transition ease-in-out m-0focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                          aria-describedby="emailHelp123"
                          placeholder="Username"
                        />
                      </div>
                      )
                    })}

                  </div>

                  <button
                    type="button"
                    className="px-6 py-2.5 bg-red-dark text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2.5 bg-green text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out ml-1"
                  >
                    Save changes
                  </button>
                </form>
              </div>
            </div>
            <div className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
