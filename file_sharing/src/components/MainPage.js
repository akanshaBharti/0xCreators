import React from "react";
import Navbar from "./Navbar.js"
import FileUpload from './addFile.tsx';

function MainPage({isConnected}){
    return(
        <div>
          <Navbar isConnected={isConnected} />
        </div>
    )
}
export default MainPage