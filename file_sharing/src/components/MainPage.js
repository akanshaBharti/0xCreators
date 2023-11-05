import React from "react";
import Navbar from "./Navbar.js"
import FileUpload from './addFile.tsx';
import Button from "./Button.js";

function MainPage({isConnected, address}){
    return(
        <div>
          <Navbar address={address} isConnected={isConnected} />
        </div>
    )
}
export default MainPage