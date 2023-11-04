
import Button from './components/Button'
import Heading from './components/Heading';
import './App.css';
import ConnectWallet from './components/connectWallet';
import Drive from './contracts/Drive.sol/Drive.json'
import { ethers } from "ethers";
import { useState, useEffect } from "react";
import Loader from './components/Loader.js';
import AddFile from './components/addFile.js';

function App() {
  return (
    
    <div className='flex flex-col items-center justify-center h-screen bg-black border-dotted border-2 border-color: rgb(229 231 235)'>
      <div className=' pb-28'>
      <Heading/>
      </div>
    <div className=' pb-40'>
      <Button/>
    </div>
    <AddFile/>
    </div>    
  );
}

export default App;
