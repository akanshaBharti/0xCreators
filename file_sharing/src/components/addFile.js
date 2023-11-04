import React from 'react'
import "./Css/addFile.css"

const AddFile = () =>{
    return(
        <>
        <div className='grid grid-cols-3 gap-40'>
        <button>Upload File</button>
        <button>Display</button>
        <button>Share</button>
        </div>
        </>
        
    );
}

export default AddFile;