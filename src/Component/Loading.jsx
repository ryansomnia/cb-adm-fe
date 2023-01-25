import React from "react";

function Loading({ show }) {
    
  return (
    <div className="flex flex-row">
    {/* <!-- Modal --> */}
    <div
      className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
      id="modalLoading"
      tabindex="-5"
      aria-labelledby="modalLoading"
      data-bs-backdrop="static" data-bs-keyboard="false"
      aria-hidden={false}

    >
      <div className="modal-dialog relative flex top-1/4 justify-center content-center disabled">
        <div>
        <svg class="animate-spin -ml-1 mr-3 h-20 w-20 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
    </svg>
    <h1 className="text-bold text-white">Loading ...</h1>
        </div>
      
      </div>
    </div>
  </div>
  );
}

export default Loading;
