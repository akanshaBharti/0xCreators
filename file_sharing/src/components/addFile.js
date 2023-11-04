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

import React, { useState, useRef } from 'react';
import "./Css/addFile.css";

const AddFile = () => {
  const [file, setFile] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [inputValue, setInputValue] = useState(""); // State for the input field
  const fileInputRef = useRef(null);

  const handleFileSelected = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
  };

  const handleUploadFileClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleShareClick = () => {
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
  };

  return (
    <>
      <div className='grid grid-cols-3 gap-40'>
        <button onClick={handleUploadFileClick}>Upload File</button>
        <button>Display</button>
        <button onClick={handleShareClick}>Share</button>
      </div>

      <input
        type="file"
        ref={fileInputRef}
        style={{ display: "none" }}
        onChange={handleFileSelected}
      />

      {isDialogOpen && (
        <div className="dialog">
          <span className="close" onClick={closeDialog}>&times;</span>
          <h2 className="dialog-title">Enter Address</h2>
          {file && <p>Selected File: {file.name}</p>}
          <input
            type="text"
            placeholder="Enter address"
            value={inputValue}
            className='border-2 border-zinc-200'
            onChange={(e) => setInputValue(e.target.value)}
          />
          <div className='mt-2 flex gap-2'>
          <button >Send</button>
          <button>Cancel</button>
          </div>
          
        </div>
      )}
    </>
  );
}

export default AddFile;


