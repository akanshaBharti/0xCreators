// import React from 'react'
// import "./Css/addFile.css"

// const AddFile = () =>{
//     return(
//         <>
//         <div className='grid grid-cols-3 gap-40'>
//         <button>Upload File</button>
//         <button>Display</button>
//         <button>Share</button>
//         </div>
//         </>
        
//     );
// }

// export default AddFile;

import React, { useState } from 'react';
import "./Css/addFile.css";

const AddFile = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className='grid grid-cols-3 gap-40'>
        <button>Upload File</button>
        <button>Display</button>
        <button onClick={openModal}>Share</button>
      </div>

      {isModalOpen && (
        <div className="modal-background ">
          <div className="modal">
            <span className="close" onClick={closeModal}>&times;</span>
            <h2>Share Modal</h2>
            <p>Add your modal content here.</p>
          </div>
        </div>
      )}
    </>
  );
}

export default AddFile;
