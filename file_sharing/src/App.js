
import Button from './components/Button'
import Heading from './components/Heading';
import './App.css';
import ConnectWallet from './components/connectWallet';
import Drive from './contracts/Drive.sol/Drive.json'
import { ethers } from "ethers";
import { useState, useEffect } from "react";
import Loader from './components/loader.js';

function App() {
  return (
    
    <div className='flex flex-col items-center justify-center h-screen bg-black border-dotted border-2 border-color: rgb(229 231 235)'>
      <div className=' pb-28'>
      <Heading/>
      </div>
    <div className=' pb-40'>
      <Button/>
    </div>
    </div>    
  );
}

export default App;


