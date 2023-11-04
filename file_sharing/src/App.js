
import Button from './components/Button'
import Heading from './components/Heading';
import './App.css';
import ConnectWallet from './components/connectWallet';
import Drive from './contracts/Drive.sol/Drive.json'
// import { ethers } from "ethers";
import { useState, useEffect } from "react";
import Loader from './components/Loader.js';
import FileUpload from './components/addFile.tsx';
import Wallet from "./components/Wallet.js"

function App() {
  return (
    <div>

    <FileUpload/>
    </div>    
  );
}

export default App;
